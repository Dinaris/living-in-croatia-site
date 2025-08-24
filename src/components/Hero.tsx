import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Star, Users, Award } from 'lucide-react';
import { siteConfig } from '@/content/site';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Эксперт по жизни в Хорватии</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-8 leading-relaxed">
              {siteConfig.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                <Users className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold text-gray-900">500+ участников</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                <Award className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold text-gray-900">5+ лет опыта</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                href="#buy"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">Купить доступ — {siteConfig.price}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm hover:bg-white text-cyan-600 border-2 border-cyan-200 hover:border-cyan-300 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Написать в Telegram
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/Main.jpeg"
                  alt="Tatyana Nazarenko"
                  width={500}
                  height={500}
                  className="relative shadow-2xl object-cover border-8 border-white/80 backdrop-blur-sm rounded-3xl"
                  priority
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-2xl border border-cyan-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-900">Онлайн сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}