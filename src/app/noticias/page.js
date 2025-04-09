'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'

const Noticias = () => {
  const noticias = [
    {
      titulo: "Inauguran lujoso hotel boutique en el centro de Morelia",
      fecha: "Abril 2025",
      descripcion: "Un nuevo espacio de hospedaje con vistas a la Catedral y servicios exclusivos.",
      categoria: "Turismo",
      municipio: "Morelia",
      imagen: "/img/imagesGoMich/mich.webp"
    },
    {
      titulo: "Pátzcuaro celebrará el Festival de la Cultura Purépecha",
      fecha: "Marzo 2025",
      descripcion: "Un evento con danzas tradicionales, gastronomía y exposiciones artesanales.",
      categoria: "Cultura",
      municipio: "Pátzcuaro",
      imagen: "/img/imagesGoMich/Fondo.jpg"
    },
    {
      titulo: "Nuevo recorrido turístico en Morelia",
      fecha: "Febrero 2025",
      descripcion: "Explora los rincones más emblemáticos con guías certificados.",
      categoria: "Turismo",
      municipio: "Morelia",
      imagen: "/img/imagesGoMich/mich.webp"
    },
    {
      titulo: "Pátzcuaro lanza festival gastronómico",
      fecha: "Enero 2025",
      descripcion: "Disfruta de los mejores platillos de la cocina purépecha.",
      categoria: "Cultura",
      municipio: "Pátzcuaro",
      imagen: "/img/imagesGoMich/Fondo.jpg"
    },
    {
      titulo: "Janitzio se prepara para la celebración de Día de Muertos",
      fecha: "Octubre 2024",
      descripcion: "Se esperan miles de visitantes para una de las celebraciones más emblemáticas de México.",
      categoria: "Tradiciones",
      municipio: "Janitzio",
      imagen: "/img/imagesGoMich/viejitos.jpg"
    },
    {
      titulo: "Descubren nuevo parque natural en la sierra",
      fecha: "Mayo 2025",
      descripcion: "Un espacio ecológico que promete ser el nuevo pulmón verde de la región.",
      categoria: "Turismo",
      municipio: "Sierra",
      imagen: "/img/imagesGoMich/Fondo.jpg"
    },
    {
      titulo: "Expo de arte contemporáneo en Morelia",
      fecha: "Abril 2025",
      descripcion: "Una muestra que reúne a artistas emergentes de diversas partes del país.",
      categoria: "Cultura",
      municipio: "Morelia",
      imagen: "/img/imagesGoMich/mich.webp"
    },
    {
      titulo: "Festival de música tradicional en Pátzcuaro",
      fecha: "Marzo 2025",
      descripcion: "Un encuentro de ritmos y sonidos autóctonos que enaltecen la cultura local.",
      categoria: "Tradiciones",
      municipio: "Pátzcuaro",
      imagen: "/img/imagesGoMich/viejitos.jpg"
    },
    {
      titulo: "Inauguración de centro cultural en Janitzio",
      fecha: "Febrero 2025",
      descripcion: "Espacio dedicado a la preservación y difusión de las artes locales.",
      categoria: "Cultura",
      municipio: "Janitzio",
      imagen: "/img/imagesGoMich/Fondo.webp"
    },
    {
      titulo: "Ruta gastronómica de comida tradicional en Morelia",
      fecha: "Enero 2025",
      descripcion: "Una experiencia culinaria que recorre los sabores típicos de la región.",
      categoria: "Tradiciones",
      municipio: "Morelia",
      imagen: "/img/imagesGoMich/mich.webp"
    }
  ]

  const [order, setOrder] = useState("Novedad")
  const [categoria, setCategoria] = useState("Todas")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const sortedNoticias = [...noticias]
    .filter(n => categoria === "Todas" || n.categoria === categoria)
    .sort((a, b) => {
      switch (order) {
        case "Alfabéticamente":
          return a.titulo.localeCompare(b.titulo)
        case "Antiguas primero":
          return a.fecha.localeCompare(b.fecha)
        case "Novedad":
          return b.fecha.localeCompare(a.fecha)
        default:
          return 0
      }
    })

  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img src="/img/imagesGoMich/mich.webp" alt="Noticias" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-onest drop-shadow-md mb-10 text-left">Noticias</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div>
                    <p className="text-2xl">146</p>
                    <p className="opacity-80">noticias publicadas</p>
                  </div>
                  <div>
                    <p className="text-2xl">312,489</p>
                    <p className="opacity-80">lectores mensuales</p>
                  </div>
                  <div>
                    <p className="text-2xl">24,891</p>
                    <p className="opacity-80">comentarios registrados</p>
                  </div>
                  <div>
                    <p className="text-2xl">9.5 / 10</p>
                    <p className="opacity-80">nivel de interés</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex lg:hidden flex-col justify-end h-full pb-10">
                <h1 className="text-5xl font-onest drop-shadow-md mb-8 text-left">Noticias</h1>
                <div className="grid grid-cols-4 gap-x-6 text-left text-sm font-onest">
                  <div className="hidden sm:block">
                    <p className="text-xl">146</p>
                    <p className="opacity-80">noticias publicadas</p>
                  </div>
                  <div>
                    <p className="text-xl">312,489</p>
                    <p className="opacity-80">lectores mensuales</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xl">24,891</p>
                    <p className="opacity-80">comentarios registrados</p>
                  </div>
                  <div>
                    <p className="text-xl">9.5 / 10</p>
                    <p className="opacity-80">nivel de interés</p>
                  </div>
                </div>
              </div>

              <div className="flex sm:hidden flex-col justify-end h-full pb-9 text-center">
                <h1 className="text-4xl font-onest drop-shadow-md mb-6">Noticias</h1>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-onest">
                  <div>
                    <p className="text-xl">312,489</p>
                    <p className="opacity-80">lectores mensuales</p>
                  </div>
                  <div>
                    <p className="text-xl">9.5 / 10</p>
                    <p className="opacity-80">nivel de interés</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 font-onest text-sm md:text-base">
            {sortedNoticias.length} noticias encontradas
          </p>
          <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-start cursor-pointer">
            {["Todas", "Turismo", "Cultura", "Tradiciones"].map(cat => (
              <button
                key={cat}
                className={`px-3 py-1 rounded-full text-sm font-onest border ${categoria === cat ? "bg-accent text-white" : "text-gray-600 bg-gray-100 cursor-pointer"
                  } hover:bg-accent hover:text-white transition cursor-pointer`}
                onClick={() => setCategoria(cat)}
              >
                {cat}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="border rounded-full px-4 py-1 text-sm font-onest bg-white shadow hover:bg-gray-50 cursor-pointer"
              >
                Ordenar
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-52 bg-white rounded-lg shadow-lg text-sm font-onest z-50 ">
                  {["Novedad", "A-Z", "Antiguas primero"].map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setOrder(option)
                        setDropdownOpen(false)
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-accent z-0" />
        <Container>
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            {sortedNoticias.map((nota, i) => (
              <div
                key={i}
                className={`bg-white shadow-xl rounded-3xl p-6 relative flex flex-col md:flex-row gap-6 items-center md:items-start ${i % 2 === 0 ? "md:justify-self-end" : "md:justify-self-start"
                  }`}
              >
                <div className="relative w-full md:w-48 lg:w-64 aspect-square flex-shrink-0">
                  <img
                    src={nota.imagen}
                    alt={nota.titulo}
                    className="w-full h-full object-cover rounded-full md:rounded-lg"
                  />
                  <span
                    className={`absolute z-10
                    top-4 left-1/2 transform -translate-x-1/2
                    md:top-2 md:left-2 md:transform-none
                    px-3 py-1 text-xs font-onest text-white rounded-full
                    ${nota.categoria === "Turismo"
                        ? "bg-green-500"
                        : nota.categoria === "Cultura"
                          ? "bg-rose-500"
                          : "bg-blue-600"
                      }
                  `}
                  >
                    {nota.categoria.toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-accent font-onest uppercase mb-1">{nota.fecha}</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{nota.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-3">{nota.descripcion}</p>
                  <button className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-primary/90 transition block mx-auto md:mx-0 cursor-pointer">
                    Ver más
                  </button>
                </div>
              </div>



            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Noticias
