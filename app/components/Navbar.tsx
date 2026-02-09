export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <span className="font-bold text-lg">FitCoach</span>

        <div className="flex gap-6 items-center">
          <a
            href="https://instagram.com/fitcoach"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-4 py-2 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
