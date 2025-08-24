"use client";

import Image from "next/image";
import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "YouTube",
      url: siteConfig.socialLinks.youtube,
      icon: Youtube,
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500/10",
    },
    {
      name: "Instagram",
      url: siteConfig.socialLinks.instagram,
      icon: Instagram,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
    },
    {
      name: "TikTok",
      url: siteConfig.socialLinks.tiktok,
      icon: TikTokIcon,
      color: "hover:text-white",
      bgColor: "hover:bg-gray-800",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <Image
                  src="/images/Logo.png"
                  alt="Living in Croatia Logo"
                  width={80}
                  height={80}
                  className="relative rounded-full shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 bg-gray-800/80 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:scale-110 ${social.bgColor} shadow-xl hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50 relative overflow-hidden`}
                    aria-label={social.name}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Icon
                      className={`w-7 h-7 text-gray-300 ${social.color} transition-all duration-300 relative z-10`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="text-center">
              <p className="text-gray-400 text-sm leading-relaxed">
                © 2025 Living in Croatia. {t("allRightsReserved")}
              </p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">
                  {t("madeWithLove")}
                </span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
