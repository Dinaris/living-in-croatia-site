import Link from 'next/link';
import { Users, Laptop, Clock, Heart, Target } from 'lucide-react';
import { siteConfig } from '@/content/site';

const icons = [Users, Laptop, Clock, Heart];

export default function ForWhom() {
  return (
    <section id="forwhom" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-blue-50/50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
              <Target className="w-4 h-4 text-cyan-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Целевая аудитория</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Для кого подходит
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {siteConfig.forWhom.map((item, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-cyan-100/50 hover:border-cyan-200 relative overflow-hidden"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-110">
                        <Icon className="w-8 h-8 text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="#buy"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">Купить доступ — {siteConfig.price}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}