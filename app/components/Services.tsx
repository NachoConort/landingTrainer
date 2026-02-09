const services = [
  {
    title: "💻 Plan Online",
    desc: "Rutina personalizada con seguimiento semanal.",
  },
  {
    title: "🏋️ Entrenamiento Presencial",
    desc: "Sesiones adaptadas a tu nivel y objetivos.",
  },
  {
    title: "📈 Seguimiento Mensual",
    desc: "Ajustes constantes para maximizar resultados.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
