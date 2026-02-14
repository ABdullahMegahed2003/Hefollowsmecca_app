'use client'

import { BoltIcon, MapPinIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Header() {
  const cards = [
    {
      title: 'توصيل طعام سريع في مكة',
      description: 'طلبك يوصلك في أسرع وقت داخل أحياء مكة المكرمة',
      icon: BoltIcon,
    },
    {
      title: 'تغطية أحياء مكة كلها',
      description: 'نوصل لمعظم المناطق والأحياء بمكة باستمرار',
      icon: MapPinIcon,
    },
    {
      title: 'طعام ساخن وجودة عالية',
      description: 'يوصلك الطلب ساخن وطازج زي ما طلبت بالضبط',
      icon: ShieldCheckIcon,
    },
    {
      title: 'طلب أكل سهل من الجوال',
      description: 'اختار واطلب في ثواني من أي مكان في مكة',
      icon: DevicePhoneMobileIcon,
    },
  ]

  return (
    <header className="relative w-full pb-16" dir="rtl">
      {/* Hero Video */}
      <div className="relative h-[60vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/Video-logo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl">
              طعامك عندنا
            </h1>

            <p className="mt-5 text-lg sm:text-xl lg:text-2xl font-medium text-white/95 drop-shadow-lg">
              ألذ الأكلات من مطاعم مكة توصلك سريع وساخن لباب البيت
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-start">
  <Link
    href="/menu"
    className="
      rounded-full 
      bg-gradient-to-r from-[#be1f24] to-[#f2941e] 
      px-5 py-2.5 
      sm:px-7 sm:py-3 
      text-sm sm:text-base lg:text-lg 
      font-bold 
      text-white 
      shadow-lg 
      hover:brightness-110 
      hover:scale-105 
      transition 
      duration-300
      min-w-[140px] sm:min-w-[160px]
      text-center
    "
  >
    اطلب الآن
  </Link>

  <Link
    href="/about"
    className="
      rounded-full 
      border border-white/60 
      bg-white/10 
      backdrop-blur-md 
      px-5 py-2.5 
      sm:px-7 sm:py-3 
      text-sm sm:text-base lg:text-lg 
      font-bold 
      text-white 
      hover:bg-white/25 
      hover:scale-105 
      transition 
      duration-300
      min-w-[140px] sm:min-w-[160px]
      text-center
    "
  >
    تعرف علينا
  </Link>
</div>
          </div>
        </div>
      </div>

      {/* Marquee with Glassmorphism Cards */}
      <div className="relative z-20 -mt-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="marquee-wrap h-[210px] sm:h-[230px]">
          <div className="marquee-track track-a">
            {cards.map((card) => (
              <article
                key={`a-${card.title}`}
                className="slider-card min-w-[280px] flex-shrink-0 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-xl sm:min-w-[320px]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#be1f24] to-[#f2941e] text-white shadow-md">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#be1f24' }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#f2941e' }}>
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="marquee-track track-b" aria-hidden="true">
            {cards.map((card) => (
              <article
                key={`b-${card.title}`}
                className="slider-card min-w-[280px] flex-shrink-0 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-xl sm:min-w-[320px]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#be1f24] to-[#f2941e] text-white shadow-md">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#be1f24' }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#f2941e' }}>
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrap {
          position: relative;
          overflow: hidden;
        }

        .marquee-track {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          display: flex;
          gap: 1.5rem;
          width: max-content;
          padding-inline-end: 1.5rem;
          will-change: transform;
        }

        .track-a {
          animation: slideA 20s linear infinite;
        }

        .track-b {
          animation: slideB 20s linear infinite;
        }

        .slider-card {
          transition: all 0.3s ease;
        }

        .slider-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 40px -10px rgba(190, 31, 36, 0.35);
        }

        @keyframes slideA {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        @keyframes slideB {
          from { transform: translateX(100%); }
          to   { transform: translateX(0%); }
        }
      `}</style>
    </header>
  )
}
