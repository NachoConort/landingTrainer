export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="max-w-4xl text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Entrenamiento personalizado <br />
          <span className="text-green-400">para resultados reales</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Planes adaptados a tu cuerpo, tu tiempo y tus objetivos.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            className="inline-block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-10 py-5 rounded-2xl text-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
