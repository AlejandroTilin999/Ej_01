'use client'

import { useState, useRef, useEffect } from "react"
import Container from "@/components/ui/Container"
import WifiIcon from '@/assets/icons/WifiIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import LuxuryIcon from '@/assets/icons/LuxuryIcon'
import HotWaterIcon from '@/assets/icons/HotWaterIcon'
import HeartIcon from '@/assets/icons/HeartIcon'
import HeartFilledIcon from '@/assets/icons/HeartFilledIcon'
import LocationIcon from '@/assets/icons/LocationIcon'

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
  const [favorites, setFavorites] = useState({})
  const [randomPrices, setRandomPrices] = useState([])
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

  useEffect(() => {
    const newPrices = accommodations.map(() => ({
      price: Math.floor(Math.random() * 500) + 400,
      discount: Math.random() < 0.4 ? Math.floor(Math.random() * 30) + 10 : null
    }))
    setRandomPrices(newPrices)
  }, [])

  const filteredHotels = accommodations.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container className="py-8 pt-32 text-center">

      <div className="border border-accent rounded-2xl px-6 py-5 mb-10 flex flex-col justify-center items-start gap-4 bg-white shadow-md">
        <h2 className="text-lg font-bold text-primary">Directorio Alojamientos</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredHotels.map((hotel, i) => {
          const isFav = favorites[hotel.name] || false
          const hotelPrice = randomPrices[i]?.price
          const discount = randomPrices[i]?.discount

          if (!randomPrices[i]) return null

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 relative"
              onClick={() => setSelectedHotel(hotel)}
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />

                {discount && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    {discount}% OFF
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setFavorites(prev => ({
                      ...prev,
                      [hotel.name]: !isFav
                    }))
                  }}
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition"
                >
                  {isFav
                    ? <HeartFilledIcon w={20} h={20} fill="#e11d48" />
                    : <HeartIcon w={20} h={20} stroke="#666" />
                  }
                </button>
              </div>

              <div className="p-4 text-left flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-primary leading-snug">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm">
                    {renderStars(hotel.rating)}
                    <span className="text-gray-500 text-xs">({hotel.rating.toFixed(1)})</span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold flex items-center gap-1">
                    <LocationIcon className="w-5 h-5 text-accent" />
                    {hotel.municipio}
                  </p>

                  <p className="text-xs text-gray-400 italic">{hotel.categoria}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{hotel.descripcion}</p>
                </div>

                <div className="flex items-center flex-wrap gap-3 text-xs text-gray-600 mt-3">
                  {hotel.internet && <div className="flex items-center gap-1"><WifiIcon /> Internet</div>}
                  {hotel.comida && <div className="flex items-center gap-1"><FoodIcon /> Comida</div>}
                  {hotel.lujo && <div className="flex items-center gap-1"><LuxuryIcon /> Lujo</div>}
                  {hotel.aguaCaliente && <div className="flex items-center gap-1"><HotWaterIcon /> Agua caliente</div>}
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-primary font-bold">
                    Desde <span className="text-lg">${hotelPrice}</span> MXN
                  </div>
                  <button className="bg-accent text-white text-xs px-4 py-2 rounded-full hover:bg-accent/90 transition cursor-pointer">
                    Ver disponibilidad
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
