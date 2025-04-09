'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const Navbar = () => {
  const pathname = usePathname()
  const isAccommodationPage = pathname.startsWith('/alojamientos') || pathname.startsWith('/restaurantes') || pathname.startsWith('/noticias')


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
  const buttonTextColor = 'text-white'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${solidBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between py-2">
        <Link href="/" className="flex items-center cursor-pointer">
          <img
            src="/img/imagesGoMich/GoMichoacan.png"
            alt="GoMichoacán"
            className="w-[100px] md:w-[120px] lg:w-[140px]"
          />
        </Link>

        <ul className={`hidden lg:flex items-center space-x-6 font-semibold text-lg md:text-base sm:text-sm ${linkColor}`}>
          <li><Link href="/restaurantes" className="cursor-pointer hover:text-accent transition-colors duration-300">Restaurantes</Link></li>
          <li><Link href="/alojamientos" className="cursor-pointer hover:text-accent transition-colors duration-300">Alojamientos</Link></li>
          <li><Link href="#" className="cursor-pointer hover:text-accent transition-colors duration-300">Actividades</Link></li>
          <li><Link href="#" className="cursor-pointer hover:text-accent transition-colors duration-300">Municipios</Link></li>
          <li><Link href="/noticias" className="cursor-pointer hover:text-accent transition-colors duration-300">Blog</Link></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className={`bg-accent ${buttonTextColor} px-4 py-1.5 rounded-md shadow hover:opacity-90 transition-opacity duration-300 cursor-pointer text-sm md:text-base`}>
            Inicia Sesión
          </button>
          <button className={`bg-secondary ${buttonTextColor} px-4 py-1.5 rounded-md shadow hover:opacity-90 transition-opacity duration-300 cursor-pointer text-sm md:text-base`}>
            Anúnciate
          </button>
        </div>

        <button className={`lg:hidden text-3xl transition-transform duration-300 cursor-pointer ${solidBg ? 'text-primary' : 'text-white'}`} onClick={toggleMenu}>
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
            <li className="py-3 border-b"><Link href="/restaurantes" onClick={toggleMenu} className="cursor-pointer hover:text-secondary transition-colors duration-300">Restaurantes</Link></li>
            <li className="py-2 border-b"><Link href="/alojamientos" onClick={toggleMenu} className="cursor-pointer hover:text-secondary transition-colors duration-300">Alojamientos</Link></li>
            <li className="py-2 border-b"><Link href="#" onClick={toggleMenu} className="cursor-pointer hover:text-secondary transition-colors duration-300">Actividades</Link></li>
            <li className="py-2 border-b"><Link href="#" onClick={toggleMenu} className="cursor-pointer hover:text-secondary transition-colors duration-300">Municipios</Link></li>
            <li className="py-2 border-b"><Link href="/noticias" onClick={toggleMenu} className="cursor-pointer hover:text-secondary transition-colors duration-300">Blog</Link></li>
          </ul>

          <div className="flex flex-col gap-3 px-6 py-4 items-center">
            <button className="bg-accent text-white px-4 py-2 rounded-lg shadow hover:opacity-85 cursor-pointer transition-opacity duration-300 w-[150px]">Inicia Sesión</button>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg shadow hover:opacity-85 cursor-pointer transition-opacity duration-300 w-[150px]">Anúnciate</button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
