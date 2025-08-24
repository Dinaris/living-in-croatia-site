"use client";

import TestimonialsSlider from "./TestimonialsSlider";
import { siteConfig } from "@/content/site";
import { MessageSquare, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50">
        <div className="absolute top-16 left-16 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
              <MessageSquare className="w-4 h-4 text-cyan-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">
                {t("clientReviews")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {t("reviewsTitle")}
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("reviewsDescription")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-cyan-100">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-900">
                  {t("rating")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-cyan-100">
                <MessageSquare className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold text-gray-900">
                  {t("reviewsCount")}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-cyan-100/50">
            <TestimonialsSlider testimonials={siteConfig.testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}
