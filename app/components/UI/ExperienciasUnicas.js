'use client'

import { useState, useEffect } from 'react'

const experiencias = [
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Morelia", descripcion: "La capital de Michoacán" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro", descripcion: "Un pueblo mágico lleno de historia" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Uruapan", descripcion: "Cuna del aguacate y la naturaleza" },
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Janitzio", descripcion: "La isla del Día de Muertos" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Zirahuén", descripcion: "El lago de aguas cristalinas" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Tzintzuntzan", descripcion: "Ruinas purépechas y cultura" }
]

const ExperienciasUnicas = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const prevSlide = () => {
    setStartIndex(prevIndex => (prevIndex === 0 ? experiencias.length - itemsPerView : prevIndex - 1))
  }

  const nextSlide = () => {
    setStartIndex(prevIndex => (prevIndex + 1 >= experiencias.length - (itemsPerView - 1) ? 0 : prevIndex + 1))
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pueblos Mágicos, experiencias únicas</h2>
        <div className="w-50 h-[5px] bg-red-400 mb-6"></div>

        <div className="relative flex items-center">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 sm:left-[-2rem] z-10 bg-primary text-white p-3 rounded-full hover:scale-110 transition-all"
          >
            ❮
          </button>
          
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${startIndex * (100 / itemsPerView)}%)` }}
            >
              {experiencias.map((item, index) => (
                <div key={index} className="min-w-[50%] sm:min-w-[33.33%] lg:min-w-[25%] px-2">
                  <div className="relative overflow-hidden rounded-xl shadow-md group">
                    <img 
                      src={item.src} 
                      alt={item.titulo} 
                      className="w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Fondo degradado para el texto */}
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{item.titulo}</h3>
                      <p className="text-sm opacity-80">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide} 
            className="absolute right-0 sm:right-[-2rem] z-10 bg-primary text-white p-3 rounded-full hover:scale-110 transition-all"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExperienciasUnicas
