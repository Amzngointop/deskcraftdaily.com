'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { navigation, reviewCategories } from '@/data/site';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex items-center gap-1.5 select-none"
    >
      <Sun size={13} className="text-yellow-400" />
      <span
        className="relative inline-flex w-9 h-5 rounded-full transition-colors duration-200"
        style={{ background: dark ? '#1B4FD8' : '#d4d4d4' }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
          style={{ transform: dark ? 'translateX(16px)' : 'translateX(0)' }}
        />
      </span>
      <Moon size={13} className="text-blue-300" />
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-[#e5e5e5] dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: theme toggle + logo */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/"
              className="font-fraunces font-black text-[#111111] dark:text-white hover:text-[#1B4FD8] dark:hover:text-blue-400 transition-colors"
              style={{ fontSize: '1.6rem', letterSpacing: '0.08em' }}
            >
              DESKCRAFTDAILY
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) =>
              item.hasMegaMenu ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    className="flex items-center gap-1 category-label text-[#111111] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 transition-colors"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200"
                      style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 shadow-lg w-64 py-2 z-50">
                      {reviewCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="block px-4 py-2 text-sm text-[#444444] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 hover:bg-[#f8faff] dark:hover:bg-gray-800 transition-colors"
                          style={{ fontFamily: 'var(--font-inter)' }}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="category-label text-[#111111] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#111111] dark:text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-[#e5e5e5] dark:border-gray-800 px-4 py-4">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-3 category-label text-[#111111] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 border-b border-[#e5e5e5] dark:border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="mt-3 pt-3">
            <p className="category-label text-[#666666] dark:text-gray-500 mb-2">BEST GEAR</p>
            {reviewCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block py-2 text-sm text-[#444444] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400 pl-3"
                onClick={() => setMenuOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
