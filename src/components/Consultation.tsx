import Link from 'next/link';
import { MessageCircle, Clock, HelpCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/content/site';

export default function Consultation() {
  return (
    <section id="consultation" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50/50 to-indigo-50/30">
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-200/25 rounded-full blur-3xl animate-pulse delay-800"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-cyan-100">
            <Calendar className="w-4 h-4 text-cyan-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Персональная помощь</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {siteConfig.consultation.title}
            </span>
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-cyan-100/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="group flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-4 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-110">
                    <Clock className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">30-40 минут</h3>
                  <p className="text-gray-600">Онлайн консультация</p>
                </div>
                
                <div className="group flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-4 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-110">
                    <HelpCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">3 вопроса</h3>
                  <p className="text-gray-600">Самые важные для вас</p>
                </div>
                
                <div className="group flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-4 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-110">
                    <MessageCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Telegram</h3>
                  <p className="text-gray-600">{siteConfig.consultation.contact}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {siteConfig.consultation.description}
              </p>
              
              <Link
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Записаться на консультацию</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}