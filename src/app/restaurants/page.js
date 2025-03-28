"use client"

import { useState, useRef, useEffect } from "react"

const restaurants = [
  {
    name: "El Rincón de Morelia",
    municipio: "Morelia",
    categoria: "Cocina tradicional",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Disfruta de platillos típicos con un toque gourmet.",
    rating: 4.7,
    terraza: true,
    reservacion: true,
    vegano: false,
    bar: true
  },
  {
    name: "Sabores de Michoacán",
    municipio: "Pátzcuaro",
    categoria: "Cocina regional",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Menú basado en ingredientes locales y recetas ancestrales.",
    rating: 4.5,
    terraza: false,
    reservacion: true,
    vegano: true,
    bar: false
  },
  {
    name: "Antojitos de Uruapan",
    municipio: "Uruapan",
    categoria: "Comida callejera",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Deliciosas garnachas y tacos al aire libre.",
    rating: 4.2,
    terraza: false,
    reservacion: false,
    vegano: false,
    bar: false
  },
  {
    name: "La Terraza del Lago",
    municipio: "Zirahuén",
    categoria: "Mariscos",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Vista espectacular al lago con especialidad en pescados.",
    rating: 4.8,
    terraza: true,
    reservacion: true,
    vegano: false,
    bar: true
  },
  {
    name: "Café Colonial",
    municipio: "Morelia",
    categoria: "Cafetería",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Pan dulce, café de olla y un ambiente acogedor.",
    rating: 4.6,
    terraza: true,
    reservacion: false,
    vegano: true,
    bar: false
  },
  {
    name: "Vegetal",
    municipio: "Tzintzuntzan",
    categoria: "Vegano",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Opciones 100% veganas con ingredientes frescos.",
    rating: 4.3,
    terraza: false,
    reservacion: true,
    vegano: true,
    bar: false
  },
  {
    name: "Bar El Mezcalito",
    municipio: "Quiroga",
    categoria: "Cantina",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Especialidad en mezcales artesanales y botanas.",
    rating: 4.4,
    terraza: false,
    reservacion: false,
    vegano: false,
    bar: true
  },
  {
    name: "Cocina Don Pancho",
    municipio: "Morelia",
    categoria: "Cocina casera",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Sabor como en casa, con recetas familiares.",
    rating: 4.1,
    terraza: false,
    reservacion: false,
    vegano: false,
    bar: false
  },
  {
    name: "Mar y Tierra",
    municipio: "Pátzcuaro",
    categoria: "Grill y mariscos",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Parrilladas para compartir junto a bebidas frías.",
    rating: 4.7,
    terraza: true,
    reservacion: true,
    vegano: false,
    bar: true
  },
  {
    name: "Casa Mezcal",
    municipio: "Morelia",
    categoria: "Fusión mexicana",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Innovación culinaria con mezcales de autor.",
    rating: 4.9,
    terraza: true,
    reservacion: true,
    vegano: true,
    bar: true
  },
  {
    name: "Tortas El Güero",
    municipio: "Uruapan",
    categoria: "Tortas gigantes",
    image: "/img/imagesGoMich/mich.webp",
    descripcion: "Tortas al carbón con ingredientes locales.",
    rating: 4.0,
    terraza: false,
    reservacion: false,
    vegano: false,
    bar: false
  },
  {
    name: "Azul Cielo",
    municipio: "Zirahuén",
    categoria: "Comida internacional",
    image: "/img/imagesGoMich/viejitos.jpg",
    descripcion: "Sabores del mundo con vista a la naturaleza.",
    rating: 4.6,
    terraza: true,
    reservacion: true,
    vegano: true,
    bar: true
  }
]

const municipios = [
  "Todos", "Morelia", "Pátzcuaro", "Uruapan", "Tzintzuntzan", "Zirahuén", "Quiroga"
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

export default function RestaurantsPage() {
  const [search, setSearch] = useState("")
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [selectedMunicipio, setSelectedMunicipio] = useState("Todos")
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedRestaurant(null)
      }
    }
    if (selectedRestaurant) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedRestaurant])

  const filteredRestaurants = restaurants.filter(
    (r) =>
      (selectedMunicipio === "Todos" || r.municipio === selectedMunicipio) &&
      r.name.toLowerCase().includes(search.toLowerCase())
  )

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
        <h2 className="text-lg font-bold text-primary">Directorio Restaurantes</h2>
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
        {filteredRestaurants.map((restaurant, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 text-left cursor-pointer border border-secondary/30 group"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <div className="relative w-full h-44 overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">{restaurant.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-secondary font-semibold">{restaurant.municipio}</p>
              <p className="text-xs text-gray-500 mb-1 italic">{restaurant.categoria}</p>
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">{restaurant.descripcion}</p>
              <ul className="text-[11px] text-gray-600 mb-2 space-y-1">
                <li>Terraza: {restaurant.terraza ? 'Sí' : 'No'}</li>
                <li>Reservación: {restaurant.reservacion ? 'Sí' : 'No'}</li>
                <li>Opciones veganas: {restaurant.vegano ? 'Sí' : 'No'}</li>
                <li>Bar: {restaurant.bar ? 'Sí' : 'No'}</li>
              </ul>
              <div className="flex items-center justify-between">
                {renderStars(restaurant.rating)}
                <button className="bg-secondary text-white text-xs px-4 py-2 rounded-full hover:bg-secondary/90 transition duration-300 cursor-pointer">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRestaurant && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div ref={modalRef} className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
              onClick={() => setSelectedRestaurant(null)}
            >
              &times;
            </button>
            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-primary mb-2">{selectedRestaurant.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Ubicación:</strong> {selectedRestaurant.municipio}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Categoría:</strong> {selectedRestaurant.categoria}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Descripción:</strong> {selectedRestaurant.descripcion}
            </p>
            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              <li><strong>Terraza:</strong> {selectedRestaurant.terraza ? 'Sí' : 'No'}</li>
              <li><strong>Reservación:</strong> {selectedRestaurant.reservacion ? 'Sí' : 'No'}</li>
              <li><strong>Opciones veganas:</strong> {selectedRestaurant.vegano ? 'Sí' : 'No'}</li>
              <li><strong>Bar:</strong> {selectedRestaurant.bar ? 'Sí' : 'No'}</li>
            </ul>
            <div className="text-yellow-500 font-semibold">
              {renderStars(selectedRestaurant.rating)} <span className="text-sm">({selectedRestaurant.rating} / 5.0)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
