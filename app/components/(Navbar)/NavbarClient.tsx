"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import Link from "next/link"
import { useIntro } from "@/app/context/IntroContext"

const links = [
  { label: "Acerca de nosotros", href: "#nosotros" },
  { label: "Comprar Propiedades", href: "#propiedades" },
  { label: "Vender", href: "#vender" },
]

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const linkVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
}

export default function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { videoTerminado } = useIntro()

  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate={videoTerminado ? "show" : "hidden"}
      className={`${scrolled ? "bg-white shadow-md" : ""} fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300`}>

      <nav className={`w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between`}>
        {/* Logo */}
        <Link href="/" className="text-azul-marino font-bold text-sm tracking-widest">
          PROPIEDADES D-JES
        </Link>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.li key={link.href} custom={i} variants={linkVariants} initial="hidden" animate={videoTerminado ? "show" : "hidden"}>
              <Link
                href={link.href}
                className="text-azul-marino text-sm font-semibold hover:text-azul-marino/70 transition-colors"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Contacto — desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={videoTerminado ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hidden md:block"
        >
          <Link
            href="#contacto"
            className="flex items-center gap-2 border border-azul-marino text-azul-marino px-4 py-2 rounded-full text-sm font-semibold hover:bg-azul-marino/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
            </svg>
            Contacto
          </Link>
        </motion.div>

        {/* Hamburguesa — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          aria-label="Abrir menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-azul-marino origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className={`block w-6 h-0.5 ${scrolled ? "bg-azul-marino" : "bg-white"}`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-azul-marino origin-center"
          />
        </button>
      </nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/0 backdrop-blur-sm"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-azul-marino text-base font-medium block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 border border-azul-marino text-azul-marino px-4 py-2 rounded-full text-sm font-medium mt-1 hover:bg-azul-marino/10 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                  </svg>
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
