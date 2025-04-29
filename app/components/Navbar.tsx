"use client";
import Link from "next/link";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative bg-black w-[90%] m-auto my-6 p-4 rounded-t-2xl md:rounded-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl">Poudel</h1>

          {/* Mobile menu button */}
          <button
            className="text-white md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-12 text-white text-xl">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-black rounded-b-2xl md:hidden z-40">
            <ul className="flex flex-col gap-4 p-4 text-white text-xl">
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
