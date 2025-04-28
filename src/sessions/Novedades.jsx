'use client'

import Container from "@/components/ui/Container"
import { novedades } from "@/data/landingpage/novedades"
import SectionTitle from '@/components/ui/SectionTitle'

const Novedades = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <SectionTitle text="Hospédate, Degusta y Descubre" color="accent" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {novedades.map((item, index) => (
            <a
              key={index}
              href={`/lugares/${item.titulo.toLowerCase().replaceAll(" ", "-")}`}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm group 
                ${index === 0 || index === 5 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <img
                src={item.src}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-primary/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100 cursor-pointer" />

              <div className="absolute bottom-0 left-0 w-full p-4 bg-primary/70 text-white text-center transition-all duration-500 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-onest">{item.titulo}</h3>
                <p className="text-sm opacity-80">{item.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Novedades
