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
import Container from "@/components/ui/Container"
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
          <span className="absolute bottom-full mb-1 px-2 py-1 text-[10px] rounded bg-black text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition text-center whitespace-nowrap z-50 max-w-[150px]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

const RestaurantsPage = () => {
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState({})
  const [randomPrices, setRandomPrices] = useState([])
  const [order, setOrder] = useState("Popularidad")
  const [dropdownOpen, setDropdownOpen] = useState(false)

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

  useEffect(() => {
    const prices = restaurants.map(() => ({
      price: Math.floor(Math.random() * 400) + 100,
      discount: Math.random() < 0.5 ? Math.floor(Math.random() * 30) + 10 : null
    }))
    setRandomPrices(prices)
  }, [])

  const sorted = [...restaurants].sort((a, b) => {
    switch (order) {
      case "Mejor valorado":
        return b.rating - a.rating
      case "Precio (más bajos primero)":
        return (randomPrices[restaurants.indexOf(a)]?.price || 0) - (randomPrices[restaurants.indexOf(b)]?.price || 0)
      case "Duración (de menor a mayor)":
        return a.name.length - b.name.length
      case "Duración (de mayor a menor)":
        return b.name.length - a.name.length
      default:
        return 0
    }
  })

  const filtered = sorted.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden ">
          <img
            src="/img/imagesGoMich/Restaurantes.jpeg"
            srcSet="/img/imagesGoMich/Restaurantes.jpeg 640w,
          /img/imagesGoMich/Restaurantes.jpeg 1024w,
          /img/imagesGoMich/Restaurantes.jpeg 1600w"
            sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 100vw,
         100vw"
            alt="Restaurantes en Michoacán"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end ">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">

              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-onest drop-shadow-md mb-10 text-left">
                  Restaurantes
                </h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div>
                    <p className="text-2xl font-onest">108</p>
                    <p className="opacity-80">restaurantes registrados</p>
                  </div>
                  <div>
                    <p className="text-2xl font-onest">4,838,688</p>
                    <p className="opacity-80">clientes han visitado</p>
                  </div>
                  <div>
                    <p className="text-2xl font-onest">290,621</p>
                    <p className="opacity-80">opiniones reales</p>
                  </div>
                  <div>
                    <p className="text-2xl font-onest">9.0 / 10</p>
                    <p className="opacity-80">así nos califican</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex lg:hidden flex-col justify-end h-full pb-10">
                <h1 className="text-5xl font-onest drop-shadow-md mb-8 text-left">
                  Restaurantes
                </h1>
                <div className="grid grid-cols-4 gap-x-6 text-left text-sm font-onest">
                  <div className="hidden sm:block">
                    <p className="text-xl font-onest">108</p>
                    <p className="opacity-80">restaurantes registrados</p>
                  </div>
                  <div>
                    <p className="text-xl font-onest">4,838,688</p>
                    <p className="opacity-80">clientes han visitado</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xl font-onest">290,621</p>
                    <p className="opacity-80">opiniones reales</p>
                  </div>
                  <div>
                    <p className="text-xl font-onest">9.0 / 10</p>
                    <p className="opacity-80">así nos califican</p>
                  </div>
                </div>
              </div>

              <div className="flex sm:hidden flex-col justify-end h-full pb-9 text-center ">
                <h1 className="text-4xl font-extrabold drop-shadow-md mb-6">Restaurantes</h1>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-onest">
                  <div>
                    <p className="text-xl font-onest">4,838,688</p>
                    <p className="opacity-80">clientes han visitado</p>
                  </div>
                  <div>
                    <p className="text-xl font-onest">9.0 / 10</p>
                    <p className="opacity-80">así nos califican</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-700 font-onest text-sm md:text-base">
            {filtered.length} restaurantes encontrados
          </p>

          <div className="flex items-center gap-2">
            <div className="border rounded-full flex items-center overflow-hidden text-sm">
              <button className="px-3 py-1 bg-gray-100 text-gray-700">Cuadrícula</button>
              <span className="text-gray-400">|</span>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Mapa</button>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="border rounded-full px-4 py-1 text-sm font-onest bg-white shadow hover:bg-gray-50"
              >
                Ordenar
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg text-sm font-onest z-50">
                  {["Popularidad", "Mejor valorado", "Precio (más bajos primero)", "Novedad", "Duración (de menor a mayor)", "Duración (de mayor a menor)"].map((option, idx) => (
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
      <Container className="py-8  text-center">


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
                <div className="relative w-full h-44 overflow-hidden group">
                  <img
                    src={rest.image}
                    alt={rest.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {discount && (
                    <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-onest px-2 py-1 rounded-full shadow">
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
                    <h3 className="text-lg font-onest text-primary leading-snug">{rest.name}</h3>
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
                    <div className="text-sm text-primary font-onest">
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
      </Container>
    </>
  )
}

export default RestaurantsPage
