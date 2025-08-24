"use client";

import { CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t, tArray } = useLanguage();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/50 to-blue-50">
        <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
            <Sparkles className="w-4 h-4 text-cyan-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              {t("exclusiveInfo")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t("whatInsideGroup")}
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("groupDescription")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tArray("features").map((feature, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-cyan-100/50 hover:border-cyan-200"
              >
                <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
