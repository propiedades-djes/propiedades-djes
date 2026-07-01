import Image from "next/image"
import FadeUpOnScroll from "../animation/FadeUpOnScroll"

const beneficios = [
  {
    titulo: "Hiper-Especialización en Medellín y el Valle de Aburrá",
    descripcion: "Avalúos más precisos y conocimiento profundo por barrio. Inventario curado y verificado.",
  },
  {
    titulo: "Experiencia Premium 1 a 1",
    descripcion: "Un único asesor experto te acompaña en todo el proceso.",
  },
  {
    titulo: "Garantía Legal y Transparencia Total",
    descripcion: "Revisión de títulos antes de promocionar la propiedad. Seguridad jurídica en cada transacción.",
  },
  {
    titulo: "Tecnología Inmobiliaria de Alto Impacto",
    descripcion: "Fotos profesionales, videos y tours que ahorran tiempo y visitas innecesarias.",
  },
]

export default function Beneficios() {
  return (
    <section className="bg-azul-claro py-20 lg:py-32 lg:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-2">

        <FadeUpOnScroll>
          <h2 className="text-center text-white-pure font-bold text-3xl md:text-4xl lg:text-5xl">
            ¿Por qué elegir PROPIEDADES D-JES?
          </h2>
        </FadeUpOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {beneficios.map((b) => (
            <FadeUpOnScroll key={b.titulo}>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col items-start gap-3">
                  <Image
                    src="/icons/ave.svg"
                    alt=""
                    width={38}
                    height={38}
                    className="shrink-0 mt-1"
                    aria-hidden
                  />
                  <h3 className="text-white-pure font-bold text-lg leading-tight md:text-xl">
                    {b.titulo}
                  </h3>
                </div>
                <hr className="border-white/40" />
                <p className="text-white-pure/80 text-sm leading-relaxed md:text-base">
                  {b.descripcion}
                </p>
              </div>
            </FadeUpOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
