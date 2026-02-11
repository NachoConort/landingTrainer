export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5491112345678"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        p-4 
        rounded-full 
        shadow-xl 
        transition 
        transform 
        hover:scale-110
        md:hidden
      "
      aria-label="Contactar por WhatsApp"
    >
      💬
    </a>
  );
}
