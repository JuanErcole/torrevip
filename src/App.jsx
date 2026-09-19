import React from "react";

function App() {
  return (
    <div
      className="min-h-screen bg-black text-white font-sans relative bg-cover bg-center bg-no-repeat selection:bg-[#dcc075] selection:text-black"
      style={{
        backgroundImage: "url('/fondo.jpg')",
      }} /* <--- CAMBIA ESTO POR EL NOMBRE DE TU IMAGEN */
    >
      {/* Capa oscura superpuesta para asegurar que el texto se lea bien sobre cualquier fondo */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/70"></div>

      {/* Contenedor principal (centrado y tamaño móvil) */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto px-6 py-8">
        {/* HEADER */}
        <header className="flex items-center gap-4 mb-6">
          {/* Logo circular */}
          <div className="w-14 h-14 rounded-full border border-[#dcc075] flex items-center justify-center text-[#dcc075] font-bold text-lg relative">
            24
            <span className="text-[10px] absolute right-1.5 bottom-3">HS</span>
          </div>
          {/* Título superior */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-widest flex gap-2 items-center">
              CASINO <span className="text-[#dcc075]">24hs</span>
            </h1>
            <p className="text-[9px] tracking-[0.25em] text-[#5c8ab4] font-semibold mt-1">
              CONTACTO DIRECTO
            </p>
          </div>
        </header>

        {/* NAVEGACIÓN SUPERIOR */}
        <nav className="flex gap-6 text-[15px] font-medium mb-12">
          <a
            href="#"
            className="text-[#5c8ab4] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Soporte técnico
          </a>
        </nav>

        {/* SECCIÓN PRINCIPAL: TÍTULO */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[1px] bg-[#dcc075]"></div>
            <span className="text-[#dcc075] text-[11px] font-bold tracking-[0.15em]">
              CASINO 24HS
            </span>
          </div>
          <h2 className="text-6xl font-bold leading-[1.1] tracking-tight">
            ¿Querés <br />
            {/* La palabra "jugar" en tipografía cursiva/serif para el toque elegante */}
            <span className="font-serif italic text-[#dcc075] font-normal text-7xl drop-shadow-lg">
              jugar?
            </span>
          </h2>
        </div>

        {/* BOTONES DE CATEGORÍAS */}
        <div className="flex flex-wrap mb-8 gap-2">
          {[
            "Apuestas deportivas",
            "Ruleta",
            "Slots",
            "Cartas",
            "Apuestas de caballos",
          ].map((cat) => (
            <div
              key={cat}
              className="px-3 py-2 rounded-full border border-gray-600 bg-black/40 text-[14px] text-gray-200 hover:border-[#dcc075] transition-all backdrop-blur-sm text-xs"
            >
              {cat}
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-[15px] mb-8">
          Contacto directo a través de WhatsApp.
        </p>

        {/* TARJETA DE CONTACTO WHATSAPP (Pegada abajo) */}
        <div className="mt-auto bg-[#101216]/95 border border-gray-800 rounded-3xl p-7 shadow-2xl backdrop-blur-md">
          <h3 className="text-[26px] font-bold mb-1 leading-tight">
            Elegí un WhatsApp para contactarnos.
          </h3>
          <p className="text-[#5c8ab4] text-[15px] mb-8">
            Elegí una opción para comenzar.
          </p>

          {/* Botones redondos de WhatsApp */}
          <div className="flex justify-around mb-8">
            {/* WhatsApp 1 */}
            <a
              href="#"
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                <svg
                  className="w-8 h-8 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <span className="font-bold text-[15px] tracking-wide">
                WhatsApp 1
              </span>
            </a>

            {/* WhatsApp 2 */}
            <a
              href="#"
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                <svg
                  className="w-8 h-8 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <span className="font-bold text-[15px] tracking-wide">
                WhatsApp 2
              </span>
            </a>
          </div>

          <p className="text-[13px] text-[#5c8ab4]/70 text-left leading-relaxed">
            La conversación comienza cuando vos enviás el mensaje.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
