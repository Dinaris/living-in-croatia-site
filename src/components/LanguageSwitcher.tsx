"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "uk", name: "UA" },
    { code: "ru", name: "RU" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-cyan-100 hover:bg-white/90 transition-all duration-300 group"
      >
        <Globe className="w-4 h-4 text-cyan-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-cyan-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-100 py-2 min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "uk" | "ru");
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                language === lang.code
                  ? "text-cyan-600 bg-cyan-50"
                  : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
