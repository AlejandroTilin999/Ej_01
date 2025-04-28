'use client'

import Container from "@/components/ui/Container"
import { galeria } from "@/data/landingpage/galeria"
import SectionTitle from '@/components/ui/SectionTitle'

const Galeria = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <SectionTitle text="Rostros y Paisajes de Michoacán" color="primary" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {galeria.map((item, index) => (
            <a
              key={index}
              href={`/destinos/${item.titulo.toLowerCase().replaceAll(" ", "-")}`}
              className="relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm cursor-pointer group touch-manipulation"
            >
              <img
                src={item.src}
                alt={item.titulo}
                className="w-full h-[140px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-onest bg-accent transition-opacity duration-500 opacity-0 group-hover:opacity-80">
                {item.titulo}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Galeria
