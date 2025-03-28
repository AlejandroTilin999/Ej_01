"use client"

import { useState, useRef, useEffect } from "react"

const accommodations = [
  {
    name: "Hotel Ocampo",
    municipio: "Morelia",
    categoria: "Hotel 4 estrellas",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Ubicado en el corazón histórico de Morelia, ideal para turistas culturales.",
    rating: 4.5,
    internet: true,
    comida: true,
    lujo: true,
    aguaCaliente: true
  },
  {
    name: "Hotel Las Palmas",
    municipio: "Pátzcuaro",
    categoria: "Cabañas ecológicas",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Rodeado de naturaleza, perfecto para una escapada tranquila.",
    rating: 4.8,
    internet: false,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "Casa Monarca",
    municipio: "Angangueo",
    categoria: "Hotel boutique",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "A pocos pasos del santuario de mariposas.",
    rating: 4.2,
    internet: true,
    comida: true,
    lujo: true,
    aguaCaliente: true
  },
  {
    name: "Refugio Zirahuén",
    municipio: "Zirahuén",
    categoria: "Cabañas familiares",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Con vista al lago y chimenea incluida.",
    rating: 4.7,
    internet: false,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "Posada Colonial",
    municipio: "Tlalpujahua",
    categoria: "Posada tradicional",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Ambiente cálido, ideal para conocer el pueblo mágico.",
    rating: 4.3,
    internet: true,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "EcoHotel Paracho",
    municipio: "Paracho",
    categoria: "Eco Hotel",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Hospédate entre guitarras y tradiciones purépechas.",
    rating: 4.6,
    internet: true,
    comida: true,
    lujo: true,
    aguaCaliente: true
  },
  {
    name: "Hotel Vista Mariposa",
    municipio: "Ocampo",
    categoria: "Hotel familiar",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "A minutos de los santuarios de mariposas.",
    rating: 4.4,
    internet: true,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "Casona Encanto",
    municipio: "Santa Clara del Cobre",
    categoria: "Hotel boutique",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Decoración rústica con piezas de cobre artesanales.",
    rating: 4.9,
    internet: true,
    comida: true,
    lujo: true,
    aguaCaliente: true
  },
  {
    name: "Hotel Imperial",
    municipio: "Tacámbaro",
    categoria: "Hotel 3 estrellas",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Con alberca, restaurante y centro de negocios.",
    rating: 4.1,
    internet: true,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "Cabañas El Roble",
    municipio: "Tzintzuntzan",
    categoria: "Cabañas privadas",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Cabañas acogedoras rodeadas de árboles.",
    rating: 4.5,
    internet: false,
    comida: true,
    lujo: false,
    aguaCaliente: true
  },
  {
    name: "Hotel Catedral",
    municipio: "Morelia",
    categoria: "Hotel 5 estrellas",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Lujo frente a la catedral de Morelia.",
    rating: 5.0,
    internet: true,
    comida: true,
    lujo: true,
    aguaCaliente: true
  },
  {
    name: "Hospedaje Rústico",
    municipio: "Quiroga",
    categoria: "Hostal económico",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Perfecto para mochileros y viajeros prácticos.",
    rating: 4.0,
    internet: false,
    comida: false,
    lujo: false,
    aguaCaliente: true
  }
]

const municipios = [
  "Todos", "Morelia", "Pátzcuaro", "Angangueo", "Zirahuén", "Tlalpujahua",
  "Paracho", "Ocampo", "Santa Clara del Cobre", "Tacámbaro",
  "Tzintzuntzan", "Quiroga"
]

function renderStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="text-yellow-400 text-sm">
      {'★'.repeat(fullStars)}
      {hasHalf && <span className="inline-block w-3">✮</span>}
      {'☆'.repeat(emptyStars)}
    </div>
  )
}

export default function AccommodationPage() {
  const [search, setSearch] = useState("")
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [selectedMunicipio, setSelectedMunicipio] = useState("Todos")
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedHotel(null)
      }
    }
    if (selectedHotel) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedHotel])

  const filteredHotels = accommodations.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase())
    const matchesMunicipio = selectedMunicipio === "Todos" || h.municipio === selectedMunicipio
    return matchesSearch && matchesMunicipio
  })

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 pt-32 text-center">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="¿A qué municipio deseas viajar?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-5 py-3 rounded-full text-sm w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm shadow hover:opacity-90 transition duration-300">
          Buscar
        </button>
      </div>

      <div className="w-full border-t border-gray-200 my-6"></div>

      <div className="border border-accent rounded-2xl px-6 py-5 mb-10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 bg-white shadow-md">
        <h2 className="text-lg font-bold text-primary">Directorio Alojamientos</h2>
        <select
          value={selectedMunicipio}
          onChange={(e) => setSelectedMunicipio(e.target.value)}
          className="bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full shadow hover:bg-accent/90 transition-all"
        >
          {municipios.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredHotels.map((hotel, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 text-left cursor-pointer"
            onClick={() => setSelectedHotel(hotel)}
          >
            <div className="relative w-full h-44 overflow-hidden group">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">{hotel.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 font-semibold">{hotel.municipio}</p>
              <p className="text-xs text-gray-400 mb-1 italic">{hotel.categoria}</p>
              <p className="text-xs text-gray-500 mb-2 line-clamp-2">{hotel.descripcion}</p>
              <ul className="text-[11px] text-gray-600 mb-2 space-y-1">
                <li>Internet: {hotel.internet ? 'Sí' : 'No'}</li>
                <li>Comida: {hotel.comida ? 'Sí' : 'No'}</li>
                <li>Habitaciones de lujo: {hotel.lujo ? 'Sí' : 'No'}</li>
                <li>Agua caliente: {hotel.aguaCaliente ? 'Sí' : 'No'}</li>
              </ul>
              {renderStars(hotel.rating)}
              <div className="flex justify-center">
                <button className="mt-3 bg-accent text-white text-xs px-4 py-2 rounded-full hover:bg-accent/90 transition duration-300 cursor-pointer">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div ref={modalRef} className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
              onClick={() => setSelectedHotel(null)}
            >
              &times;
            </button>
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-primary mb-2">{selectedHotel.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Ubicación:</strong> {selectedHotel.municipio}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Categoría:</strong> {selectedHotel.categoria}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Descripción:</strong> {selectedHotel.descripcion}
            </p>
            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              <li><strong>Internet:</strong> {selectedHotel.internet ? 'Sí' : 'No'}</li>
              <li><strong>Comida:</strong> {selectedHotel.comida ? 'Sí' : 'No'}</li>
              <li><strong>Habitaciones de lujo:</strong> {selectedHotel.lujo ? 'Sí' : 'No'}</li>
              <li><strong>Agua caliente:</strong> {selectedHotel.aguaCaliente ? 'Sí' : 'No'}</li>
            </ul>
            <div className="text-yellow-500 font-semibold">
              {renderStars(selectedHotel.rating)} <span className="text-sm">({selectedHotel.rating} / 5.0)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
