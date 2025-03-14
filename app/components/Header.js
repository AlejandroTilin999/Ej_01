'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
   
        <Link href="/" className="flex items-center">
          <Image src="/img/imagenNavbar/GoMichoacan.png" alt="GoMichoacán" width={130} height={40} />
        </Link>

        <ul className="hidden lg:flex items-center space-x-10 ml-1 text-[var(--color-primary)] font-semibold text-lg">
          <li><Link href="#" className="hover:text-gray-600">Restaurantes</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Alojamientos</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Actividades</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Municipios</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Blog</Link></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-md shadow hover:opacity-85 transition cursor-pointer">
            Inicia Sesión
          </button>
          <button className="bg-[var(--color-secondary)] text-white px-4 py-1.5 rounded-md shadow hover:opacity-85 transition cursor-pointer">
            Anúnciate
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-white absolute w-full left-0 transition-all duration-300 ${isOpen ? 'top-full opacity-100 shadow-lg' : 'top-[-500px] opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col px-6">
          <li className="py-3 border-b">
            <Link href="/restaurantes" onClick={toggleMenu}>Restaurantes</Link>
          </li>
          <li className="py-2 border-b"><Link href="#" onClick={toggleMenu}>Alojamientos</Link></li>
          <li className="py-2 border-b"><Link href="#" onClick={toggleMenu}>Actividades</Link></li>
          <li className="py-2 border-b"><Link href="#" onClick={toggleMenu}>Municipios</Link></li>
          <li className="py-2 border-b"><Link href="#" onClick={toggleMenu}>Blog</Link></li>
        </ul>

        <div className="flex flex-col gap-3 px-6 py-4">
          <button className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg shadow hover:opacity-85 transition cursor-pointer">
            Inicia Sesión
          </button>
          <button className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg shadow hover:opacity-85 transition cursor-pointer">
            Anúnciate
          </button>
        </div>
      </div>

      <button className="lg:hidden absolute top-4 right-6 text-3xl" onClick={toggleMenu}>
        {isOpen ? '✖️' : '☰'}
      </button>
    </nav>
  )
}

export default Navbar 
