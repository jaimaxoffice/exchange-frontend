

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "w-[95%] max-w-[1000px]" : "w-[92%] max-w-[1100px]"
        }`}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/20 via-transparent to-[#FF5C00]/20 blur-xl rounded-full"></div>

          {/* Glass container */}
          <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 pl-4 pr-2 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FF5C00] blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5C00] to-orange-600 flex items-center justify-center">
                    <span className="text-white font-black text-lg">R</span>
                  </div>
                </div>
                <span className="hidden sm:block font-bold text-white text-lg tracking-tight">
                  Reward<span className="text-[#FF5C00]">Sys</span>
                </span>
              </Link>

              {/* Desktop Menu - Pill Style */}
              <div className="hidden lg:flex items-center gap-1 relative">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.id)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      {/* Hover background */}
                      {hoveredLink === link.id && !isActive && (
                        <span className="absolute inset-0 bg-white/10 rounded-full animate-fadeIn"></span>
                      )}

                      {/* Active background with gradient */}
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-orange-500 rounded-full shadow-lg shadow-[#FF5C00]/50"></span>
                      )}

                      {/* Text */}
                      <span
                        className={`relative z-10 ${
                          isActive
                            ? "text-black"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center pr-2">
                <Link
                  href="/register"
                  className="relative group px-6 py-2.5 rounded-full overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] via-orange-500 to-[#FF5C00] bg-[length:200%_100%] animate-shimmer"></span>
                  {/* Glow on hover */}
                  <span className="absolute inset-0 bg-[#FF5C00] blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></span>
                  <span className="relative z-10 text-white font-semibold text-sm">
                    Get Started →
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-1 group"
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`block w-5 h-0.5 bg-[#FF5C00] transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#FF5C00] transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#FF5C00] transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl">
            <div className="space-y-2">
              {NAVIGATION_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`block px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#FF5C00] to-orange-500 text-white shadow-lg shadow-[#FF5C00]/50"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      {isActive && <span className="text-white">→</span>}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-5 py-4 bg-gradient-to-r from-[#FF5C00] to-orange-500 text-white text-center font-semibold rounded-2xl shadow-lg shadow-[#FF5C00]/50"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}