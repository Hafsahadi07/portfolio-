// components/Navbar.js
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-8 text-sm sm:text-base">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

  