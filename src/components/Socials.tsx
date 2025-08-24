"use client";

import Link from "next/link";
import { Youtube, Instagram, Share2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

// TikTok icon component since it's not in lucide-react
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

export default function Socials() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "YouTube",
      url: siteConfig.socialLinks.youtube,
      icon: Youtube,
      color: "hover:text-red-600",
      bgGradient: "from-red-100 to-red-200",
      hoverBgGradient: "hover:from-red-200 hover:to-red-300",
    },
    {
      name: "Instagram",
      url: siteConfig.socialLinks.instagram,
      icon: Instagram,
      color: "hover:text-pink-600",
      bgGradient: "from-pink-100 to-purple-200",
      hoverBgGradient: "hover:from-pink-200 hover:to-purple-300",
    },
    {
      name: "TikTok",
      url: siteConfig.socialLinks.tiktok,
      icon: TikTokIcon,
      color: "hover:text-black",
      bgGradient: "from-gray-100 to-gray-200",
      hoverBgGradient: "hover:from-gray-200 hover:to-gray-300",
    },
  ];

  return (
    <section id="contacts" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-200/15 rounded-full blur-3xl animate-pulse delay-400"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-900"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
            <Share2 className="w-4 h-4 text-cyan-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              {t("socialNetworks")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t("followUs")}
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("socialDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 bg-gradient-to-br ${social.bgGradient} ${social.hoverBgGradient} p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[220px] border border-white/50 backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="p-3 bg-white/80 rounded-2xl group-hover:bg-white transition-all duration-300 transform group-hover:scale-110">
                      <Icon
                        className={`w-8 h-8 text-gray-600 ${social.color} transition-colors duration-300`}
                      />
                    </div>
                    <span className="font-bold text-gray-900 text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {social.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
