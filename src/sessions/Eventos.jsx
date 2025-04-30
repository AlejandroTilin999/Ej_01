'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/carrousel.css'

import Container from '@/components/ui/Container'
import { eventos } from '@/data/landingpage/eventos'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

const Eventos = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <SectionTitle text="Eventos" color="primary" margin="mb-0" />
          
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="pueblos-swiper"
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {eventos.map((evento, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={evento.src}
                  alt={evento.titulo}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-4 text-center md:text-left flex flex-col justify-between h-[200px]">
                  <div>
                    <div className="flex justify-center md:justify-start text-gray-700 font-onest text-lg">
                      <span className="text-2xl">{evento.fecha}</span>
                      <span className="ml-2 text-lg uppercase">{evento.mes}</span>
                    </div>
                    <h3 className="text-lg font-onest mt-2 line-clamp-2">{evento.titulo}</h3>
                    <p className="text-gray-600 text-sm">{evento.lugar}</p>
                  </div>

                  <Button
                    href={`/eventos/${evento.titulo.toLowerCase().replaceAll(" ", "-")}`}
                    text="Ver más"
                    variant="accent"
                    size="md"
                    full={true}
                    center={true}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Eventos
