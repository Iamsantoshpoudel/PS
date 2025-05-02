"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fix bg-black w-[90%] m-auto my-6 p-4 rounded-t-2xl md:rounded-2xl  text-black dark:bg-black dark:text-white">
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
            <ul className="flex gap-12 text-white text-xl cursor-pointer">
              <li>
                <Link href="/" >Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/note">Community</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <nav className="absolute top-full inset-x-0 bg-black rounded-b-2xl  md:hidden z-40">
            <ul className="flex flex-col gap-4 p-4 text-white text-xl">
            <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/note" onClick={() => setMenuOpen(false)}>
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
