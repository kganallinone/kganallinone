"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-green-500 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          kganallinone
        </Link>
        {/* Hamburger Icon */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/access" className="hover:text-green-400">
              Access
            </Link>
          </li>
        </ul>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 text-center py-4">
            <li>
              <Link href="/" className="block py-2 hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 hover:text-green-400">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 hover:text-green-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 hover:text-green-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/access" className="block py-2 hover:text-green-400">
                Access
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
