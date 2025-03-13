import Link from 'next/link';
import '@/globals.css';

const ImageLogo = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <ImageLogo src="/img/navbar/GoMichoacan.png" alt="Go Michoacán" width={150} height={50} />
      </div>
      
      {/* Menú de navegación */}
      <ul className="hidden md:flex space-x-15 text-[var(--color-primary)] font-semibold">
        <li><Link href="/restaurantes" className="hover:text-gray-600">Restaurantes</Link></li>
        <li><Link href="/alojamientos" className="hover:text-gray-600">Alojamientos</Link></li>
        <li><Link href="/actividades" className="hover:text-gray-600">Actividades</Link></li>
        <li><Link href="/municipios" className="hover:text-gray-600">Municipios</Link></li>
        <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
      </ul>
      
      {/* Botones */}
      <div className="flex space-x-4">
        <button className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:opacity-80">Inicia Sesión</button>
        <button className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg hover:opacity-80">Anúnciate</button>
      </div>
    </nav>
  );
};

const Header = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

export default Header;