'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import "@/styles/carrousel.css"

import Container from '@/components/ui/Container'
import { pueblos } from "@/data/landingpage/pueblosMagicos"

const PueblosMagicos = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-4">
          Pueblos Mágicos, experiencias únicas
        </h2>
        <div className="w-50 h-[5px] bg-secondary mb-6"></div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="pueblos-swiper"
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {pueblos.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={`/municipios/${item.titulo.toLowerCase()}`} className="block" title={`Ir a ${item.titulo}`}>
                <div
                  className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
                  onTouchStart={(e) => {
                    const target = e.currentTarget
                    if (target && target.classList) {
                      target.classList.add('hovered')
                      setTimeout(() => {
                        target.classList.remove('hovered')
                      }, 500)
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.titulo}
                    className="w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-onest">{item.titulo}</h3>
                    <p className="text-sm opacity-80">{item.descripcion}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default PueblosMagicos
