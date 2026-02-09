export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Resultados reales
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-lg italic">
              “En 3 meses bajé 8kg y gané fuerza. Súper recomendado.”
            </p>
            <p className="mt-6 font-semibold text-gray-800">Juan Pérez, 32</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-lg italic">
              “Nunca había sido constante hasta empezar este plan.”
            </p>
            <p className="mt-6 font-semibold text-gray-800">María Gómez, 28</p>
          </div>
        </div>
      </div>
    </section>
  );
}
