import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"
import FadeUpOnScroll from "../animation/FadeUpOnScroll"

const informacion = [
  { label: "Información legal", href: "#" },
  { label: "Formularios y documentos", href: "#" },
  { label: "Privacidad y confidencialidad", href: "#" },
  { label: "Testimonio", href: "#" },
]

const navegacion = [
  { label: "Inicio", href: "#" },
  { label: "Acerca de nosotros", href: "#nosotros" },
  { label: "Comprar", href: "#propiedades" },
  { label: "Vender", href: "#vender" },
]

const zonas = ["Poblado", "Sabaneta", "Envigado", "Medellín", "Bello"]

const redes = [
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com", Icon: FaTiktok },
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
]

export default function Footer() {
  return (
    <footer className="relative bg-dorado w-full rounded-t-[3rem] md:rounded-t-[6rem] overflow-hidden">
      <div className="relative flex flex-col items-center pt-14 md:pt-20 px-6">

        <FadeUpOnScroll>
          <div className="relative flex items-center justify-center">
            <Image
              src="/footer/footer-nube-mobile.svg"
              alt=""
              width={357}
              height={186}
              className="block md:hidden w-[120%] max-w-125 h-auto"
              aria-hidden
            />
            <Image
              src="/footer/footer-nube-desktop.svg"
              alt=""
              width={599}
              height={279}
              className="hidden md:block w-140 lg:w-160 h-auto"
              aria-hidden
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 md:px-10">
              <h2 className="text-azul-marino font-bold text-lg md:text-xl text-center leading-tight">
                ¿Listo para invertir o vender en Medellín?
              </h2>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-azul-marino text-white-pure px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-azul-marino/85 transition-colors whitespace-nowrap"
              >
                <Image
                  src="/icons/WhatsApp-Icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0"
                  aria-hidden
                />
                Agenda tu Consulta Experta
              </a>
            </div>
          </div>
        </FadeUpOnScroll>

        <a
          href="#top"
          className="mt-6 flex flex-col items-center gap-1 text-white-pure text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          Volver a inicio
        </a>

        <FadeUpOnScroll>
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 xl:gap-30 mt-14 md:mt-20 pb-16">

            <div className="border border-white-pure/70 rounded-2xl px-6 py-5 text-white-pure font-semibold text-sm leading-relaxed max-w-xs">
              Propiedades D-JES =<br />
              Confianza + Rentabilidad + Estilo de Vida en Medellín
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <h3 className="text-white-pure font-bold">Información</h3>
              {informacion.map((item) => (
                <Link key={item.label} href={item.href} className="text-white-pure/90 hover:text-white-pure transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <h3 className="text-white-pure font-bold">Navegación</h3>
              {navegacion.map((item) => (
                <Link key={item.label} href={item.href} className="text-white-pure/90 hover:text-white-pure transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <h3 className="text-white-pure font-bold">Zonas cercanas</h3>
              {zonas.map((zona) => (
                <span key={zona} className="text-white-pure/90">
                  {zona}
                </span>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <h3 className="text-white-pure font-bold">Síguenos</h3>
                <div className="flex items-center gap-4">
                  {redes.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white-pure hover:opacity-75 transition-opacity"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </FadeUpOnScroll>

        <hr className="w-full max-w-6xl border-white-pure/40" />

        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-white-pure/90 text-center">
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:text-white-pure transition-colors">Política de Privacidad</Link>
            |
            <Link href="#" className="hover:text-white-pure transition-colors">Términos y Condiciones</Link>
          </div>
          <p>© 2025 PROPIEDADES D-JES . Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://r10sagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-white-pure transition-colors"
            >
              R1Os Agency
            </a>
          </p>
        </div>
      </div>

      <div className="relative w-full leading-0 mt-6 md:mt-10">
        <Image
          src="/footer/footer-mobile.svg"
          alt=""
          width={393}
          height={205}
          className="block md:hidden w-full h-auto"
          aria-hidden
        />
        <Image
          src="/footer/footer-desktop.svg"
          alt=""
          width={1440}
          height={203}
          className="hidden md:block w-full h-auto"
          aria-hidden
        />
      </div>
    </footer>
  )
}
