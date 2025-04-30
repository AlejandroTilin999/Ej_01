'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { eventos } from '@/data/eventos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/carrousel.css'

const categorias = ['Todas', 'Cultural', 'Turístico', 'Tradicional', 'Próximo', 'Nuevo', 'Destacado']
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const EventosPage = () => {
  const secciones = [
    { titulo: 'Próximamente', eventos: eventos.slice(12, 18) },
    { titulo: 'Top eventos', eventos: eventos.slice(6, 12) },
    { titulo: 'De esta semana', eventos: eventos.slice(0, 6) },
    { titulo: 'Cerca de ti', eventos: eventos.slice(18, 24) }
  ]

  return (
    <>
      <section className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img
            src="/img/imagesGoMich/Fondo.jpg"
            srcSet="/img/imagesGoMich/Fondo.jpg 640w, /img/imagesGoMich/Fondo.jpg 1024w, /img/imagesGoMich/Fondo.jpg 1600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Eventos en Michoacán"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-bold drop-shadow-md mb-10 text-left">Eventos</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">32</p><p className="opacity-80">eventos activos</p></div>
                  <div><p className="text-2xl">847,130</p><p className="opacity-80">asistentes registrados</p></div>
                  <div><p className="text-2xl">91,563</p><p className="opacity-80">comentarios publicados</p></div>
                  <div><p className="text-2xl">9.6 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>
              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Eventos</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-xs sm:text-sm font-onest text-center sm:text-left">
                  <div><p className="text-lg sm:text-xl">32</p><p className="opacity-80">eventos activos</p></div>
                  <div><p className="text-lg sm:text-xl">847,130</p><p className="opacity-80">asistentes registrados</p></div>
                  <div><p className="text-lg sm:text-xl">91,563</p><p className="opacity-80">comentarios publicados</p></div>
                  <div><p className="text-lg sm:text-xl">9.6 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {secciones.map((bloque, i) => (
        <section key={i} className="pb-16 bg-white">
          <Container>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{bloque.titulo}</h2>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={true}
              loop={true}
              spaceBetween={16}
              className="eventos-swiper"
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.2 },
                1280: { slidesPerView: 2.8 }
              }}
            >

              {bloque.eventos.map((evento, index) => (
                <SwiperSlide key={index}>
                  <div className="min-h-[260px] h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 relative h-[200px] sm:h-[240px]">
                      <img
                        src={evento.src}
                        alt={evento.titulo}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-3 right-3 z-20 bg-white rounded-md px-3 py-1 text-center shadow">
                        <p className="text-sm font-bold text-blue-600 leading-tight">{evento.fecha}</p>
                        <p className="text-[10px] uppercase tracking-wide text-gray-600">{evento.mes}</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-4 sm:w-2/3">
                      <div className="overflow-hidden">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2 min-h-[48px]">{evento.titulo}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{evento.lugar}</p>
                        <p className="text-sm text-gray-700 mt-2 line-clamp-2">{evento.descripcion || 'Evento destacado en Michoacán con gran participación comunitaria.'}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm font-bold text-emerald-600">{evento.precio || '$300.00 MXN'}</p>
                        <Button
                          href={`/eventos/${evento.titulo.toLowerCase().replaceAll(' ', '-')}`}
                          text="Ver más"
                          variant="accent"
                          size="sm"
                          full={false}
                          center={false}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
      ))}
    </>
  )
}

export default EventosPage