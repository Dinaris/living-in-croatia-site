"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-cyan-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <Image
                src="/images/Logo.png"
                alt="Living in Croatia Logo"
                width={60}
                height={60}
                className="relative rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 border-2 border-white/80"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-cyan-600"
                    : "text-gray-800 hover:text-cyan-600"
                } group`}
              >
                <span className="relative z-10">{t(item.name)}</span>
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Language Switcher - Centered */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-2xl hover:bg-white/80 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-cyan-100/50">
            <div className="flex flex-col space-y-4 pt-6">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group text-gray-700 hover:text-cyan-600 font-semibold transition-all duration-300 p-3 rounded-2xl hover:bg-white/80 backdrop-blur-sm relative"
                >
                  <span className="relative z-10">{t(item.name)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
