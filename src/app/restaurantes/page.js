'use client'

import { useState, useEffect } from "react"

import HeartIcon from '@/assets/icons/HeartIcon'
import HeartFilledIcon from '@/assets/icons/HeartFilledIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import WineIcon from '@/assets/icons/WineIcon'
import SpicyIcon from '@/assets/icons/SpicyIcon'
import AccessibilityIcon from '@/assets/icons/AccessibilityIcon'
import LocationIcon from '@/assets/icons/LocationIcon'
import WifiIcon from '@/assets/icons/WifiIcon'
import { TakeawayIcon } from '@/assets/icons/TakeawayIcon'
import { DeliveryIcon } from '@/assets/icons/DeliveryIcon'
import { ReservationIcon } from '@/assets/icons/ReservationIcon'
import { TerraceIcon } from '@/assets/icons/TerraceIcon'
import { ParkingIcon } from '@/assets/icons/ParkingIcon'
import { PetIcon } from '@/assets/icons/PetIcon'
import { MusicIcon } from '@/assets/icons/MusicIcon'
import { ClockIcon } from '@/assets/icons/ClockIcon'
import { Open24Icon } from '@/assets/icons/Open24Icon'

const IconList = ({ rest }) => {
  const icons = [
    { icon: <FoodIcon />, label: 'Tradicional', show: rest.tradicional },
    { icon: <WineIcon />, label: 'Bar', show: rest.bar },
    { icon: <SpicyIcon />, label: 'Picante', show: rest.picante },
    { icon: <AccessibilityIcon />, label: 'Accesible', show: rest.accesible },
    { icon: <TakeawayIcon />, label: 'Para llevar', show: rest.takeaway },
    { icon: <DeliveryIcon />, label: 'Entrega', show: rest.delivery },
    { icon: <ReservationIcon />, label: 'Reservaciones', show: rest.reservaciones },
    { icon: <TerraceIcon />, label: 'Terraza', show: rest.terraza },
    { icon: <ParkingIcon />, label: 'Parking', show: rest.estacionamiento },
    { icon: <PetIcon />, label: 'Pet friendly', show: rest.petFriendly },
    { icon: <WifiIcon />, label: 'Wi-Fi', show: rest.wifi },
    { icon: <MusicIcon />, label: 'Música', show: rest.musica },
    { icon: <ClockIcon />, label: 'Abierto ahora', show: rest.abierto },
    { icon: <Open24Icon />, label: '24h', show: rest.horario24 },
  ]

  return (
    <ul className="flex flex-wrap gap-2 mt-3">
      {icons.filter(i => i.show).map((item, index) => (
        <li
          key={index}
          tabIndex={0}
          className="relative group flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-default focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          {item.icon}
          <span className="absolute bottom-full mb-1 px-2 py-1 text-\[10px\] rounded bg-black text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition text-center whitespace-nowrap z-50 max-w-[150px] text-[10px] md:text-[10px]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

const RestaurantsPage = () => {
  const [search, setSearch] = useState('')
  const [selectedMunicipio, setSelectedMunicipio] = useState('Todos')
  const [favorites, setFavorites] = useState({})
  const [randomPrices, setRandomPrices] = useState([])

  const restaurants = [
    {
      name: "El Sazón Michoacano",
      municipio: "Morelia",
      categoria: "Comida tradicional",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Disfruta de platillos típicos con sazón casero.",
      rating: 4.6,
      tradicional: true,
      bar: false,
      picante: true,
      accesible: true,
      takeaway: true,
      delivery: false,
      reservaciones: true,
      terraza: false,
      estacionamiento: true,
      petFriendly: false,
      wifi: true,
      musica: false,
      abierto: true,
      horario24: false
    },
    {
      name: "La Terraza del Lago",
      municipio: "Pátzcuaro",
      categoria: "Pescados y mariscos",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Cocina regional con vista al lago de Pátzcuaro.",
      rating: 4.8,
      tradicional: true,
      bar: true,
      picante: false,
      accesible: true,
      takeaway: false,
      delivery: false,
      reservaciones: true,
      terraza: true,
      estacionamiento: true,
      petFriendly: true,
      wifi: true,
      musica: true,
      abierto: true,
      horario24: false
    },
    {
      name: "Casa Mezcal",
      municipio: "Uruapan",
      categoria: "Bar & Mezcalería",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Ambiente bohemio con mixología michoacana.",
      rating: 4.5,
      tradicional: false,
      bar: true,
      picante: true,
      accesible: false,
      takeaway: true,
      delivery: true,
      reservaciones: true,
      terraza: true,
      estacionamiento: false,
      petFriendly: true,
      wifi: true,
      musica: true,
      abierto: true,
      horario24: true
    },
    {
      name: "Antojitos Lupita",
      municipio: "Zamora",
      categoria: "Gorditas y enchiladas",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Comida económica y deliciosa en el centro.",
      rating: 4.2,
      tradicional: true,
      bar: false,
      picante: true,
      accesible: false,
      takeaway: true,
      delivery: true,
      reservaciones: false,
      terraza: false,
      estacionamiento: false,
      petFriendly: false,
      wifi: false,
      musica: false,
      abierto: true,
      horario24: false
    },
    {
      name: "Asados El Profe",
      municipio: "Lázaro Cárdenas",
      categoria: "Cortes y carnes",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Especialistas en carnes al carbón con estilo.",
      rating: 4.7,
      tradicional: false,
      bar: true,
      picante: true,
      accesible: true,
      takeaway: true,
      delivery: false,
      reservaciones: true,
      terraza: false,
      estacionamiento: true,
      petFriendly: true,
      wifi: true,
      musica: false,
      abierto: true,
      horario24: false
    },
    {
      name: "Sabores del Valle",
      municipio: "Zamora",
      categoria: "Comida campirana",
      image: "/img/imagesGoMich/restaurant.jpeg",
      descripcion: "Platillos de rancho con ingredientes orgánicos.",
      rating: 4.2,
      tradicional: true,
      bar: false,
      picante: false,
      accesible: true,
      takeaway: false,
      delivery: false,
      reservaciones: true,
      terraza: true,
      estacionamiento: true,
      petFriendly: false,
      wifi: true,
      musica: false,
      abierto: true,
      horario24: false
    }
  ]

  const municipios = ["Todos", "Morelia", "Pátzcuaro", "Uruapan", "Zamora", "Lázaro Cárdenas"]

  useEffect(() => {
    const prices = restaurants.map(() => ({
      price: Math.floor(Math.random() * 400) + 100,
      discount: Math.random() < 0.5 ? Math.floor(Math.random() * 30) + 10 : null
    }))
    setRandomPrices(prices)
  }, [])

  const filtered = restaurants.filter(r => {
    const nameMatch = r.name.toLowerCase().includes(search.toLowerCase())
    const muniMatch = selectedMunicipio === 'Todos' || r.municipio === selectedMunicipio
    return nameMatch && muniMatch
  })

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 pt-32 text-center">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="¿Qué restaurante buscas?"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 px-5 py-3 rounded-full text-sm w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        <select
          value={selectedMunicipio}
          onChange={e => setSelectedMunicipio(e.target.value)}
          className="bg-secondary text-white text-xs font-semibold px-4 py-2 rounded-full shadow hover:bg-secondary/90 transition-all"
        >
          {municipios.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((rest, i) => {
          const isFav = favorites[rest.name] || false
          const price = randomPrices[i]?.price
          const discount = randomPrices[i]?.discount

          if (!randomPrices[i]) return null

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden border border-gray-100 relative"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-full h-full object-cover"
                />
                {discount && (
                  <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    {discount}% OFF
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setFavorites(prev => ({
                      ...prev,
                      [rest.name]: !isFav
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
                  <h3 className="text-lg font-bold text-primary leading-snug">{rest.name}</h3>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm">
                    {'★'.repeat(Math.floor(rest.rating))}{rest.rating % 1 >= 0.5 && '✮'}{'☆'.repeat(5 - Math.floor(rest.rating) - (rest.rating % 1 >= 0.5 ? 1 : 0))}
                    <span className="text-gray-500 text-xs">({rest.rating.toFixed(1)})</span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold flex items-center gap-1">
                    <LocationIcon className="w-5 h-5 text-secondary" />
                    {rest.municipio}
                  </p>
                  <p className="text-xs text-gray-400 italic">{rest.categoria}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rest.descripcion}</p>
                </div>

                <IconList rest={rest} />

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-primary font-bold">
                    Desde <span className="text-lg">${price}</span> MXN
                  </div>
                  <button className="bg-secondary text-white text-xs px-4 py-2 rounded-full hover:bg-secondary/90 transition cursor-pointer">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RestaurantsPage
