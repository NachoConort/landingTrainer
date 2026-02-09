import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/trainerimage.jpg"
            alt="Entrenador personal"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
          <p className="text-gray-700 text-lg mb-6">
            Soy entrenador personal certificado con más de 5 años de experiencia
            ayudando a personas a mejorar su físico, salud y confianza.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Mi enfoque es simple: planes realistas, seguimiento constante y
            resultados sostenibles.
          </p>
          <a
            href="https://instagram.com/fitcoach"
            target="_blank"
            className="inline-block text-green-500 font-semibold hover:underline"
          >
            Ver mi Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
