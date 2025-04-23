'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'

const Navbar = () => {
  const pathname = usePathname()
  const isAccommodationPage = [
    '/alojamientos',
    '/restaurantes',
    '/noticias',
    '/actividades',
    '/municipios'
  ].some(path => pathname.startsWith(path))

  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solidBg = isAccommodationPage || scrolling
  const linkColor = solidBg ? 'text-primary' : 'text-white'
  const iconColor = solidBg ? 'text-primary' : 'text-white'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${solidBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between py-2">
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="/img/imagesGoMich/GoMichoacan.png"
            alt="GoMichoacán"
            className="w-[100px] md:w-[120px] lg:w-[140px]"
          />
        </a>

        <ul className={`hidden lg:flex items-center space-x-6 font-semibold text-lg ${linkColor}`}>
          <li><a href="/restaurantes" className="hover:text-accent transition-colors duration-300">Restaurantes</a></li>
          <li><a href="/alojamientos" className="hover:text-accent transition-colors duration-300">Alojamientos</a></li>
          <li><a href="/actividades" className="hover:text-accent transition-colors duration-300">Actividades</a></li>
          <li><a href="/municipios" className="hover:text-accent transition-colors duration-300">Municipios</a></li>
          <li><a href="/noticias" className="hover:text-accent transition-colors duration-300">Blog</a></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="/login">
            <button className="bg-accent text-white px-4 py-1.5 rounded-md shadow hover:opacity-90 transition-opacity duration-300 text-sm cursor-pointer">Inicia Sesión</button>
          </a>
          <a href="/anunciate">
            <button className="bg-secondary text-white px-4 py-1.5 rounded-md shadow hover:opacity-90 transition-opacity duration-300 text-sm cursor-pointer">Anúnciate</button>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className={`lg:hidden text-3xl ${iconColor} transition-transform duration-300`}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className={`absolute w-full left-0 transition-all duration-300 bg-white ${isOpen ? 'top-full opacity-100 shadow-lg' : 'top-[-500px] opacity-0 pointer-events-none'}`}>
          <ul className="flex flex-col px-6 text-center text-primary">
            <li className="py-3 border-b"><a href="/restaurantes" onClick={toggleMenu} className="hover:text-secondary transition-colors duration-300">Restaurantes</a></li>
            <li className="py-2 border-b"><a href="/alojamientos" onClick={toggleMenu} className="hover:text-secondary transition-colors duration-300">Alojamientos</a></li>
            <li className="py-2 border-b"><a href="/actividades" onClick={toggleMenu} className="hover:text-secondary transition-colors duration-300">Actividades</a></li>
            <li className="py-2 border-b"><a href="/municipios" onClick={toggleMenu} className="hover:text-secondary transition-colors duration-300">Municipios</a></li>
            <li className="py-2 border-b"><a href="/noticias" onClick={toggleMenu} className="hover:text-secondary transition-colors duration-300">Blog</a></li>
          </ul>

          <div className="flex flex-col gap-3 px-6 py-4 items-center">
            <a href="/login" className="w-full">
              <button className="bg-accent text-white px-4 py-2 rounded-lg shadow hover:opacity-85 transition-opacity duration-300 w-[150px] cursor-pointer">Inicia Sesión</button>
            </a>
            <a href="/anunciate" className="w-full">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg shadow hover:opacity-85 transition-opacity duration-300 w-[150px] cursor-pointer">Anúnciate</button>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
