import React from "react";

function App() {
  return (
    <div
      className="min-h-screen bg-black text-white font-sans relative bg-cover bg-center bg-no-repeat selection:bg-green-500 selection:text-white overflow-hidden flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}fondo.jpg')` }}
    >
      {/* Capa de oscuridad y desenfoque del fondo */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Luces de neón ambientales (Fondo) */}
      <div className="absolute top-0 left-0 w-full h-96 bg-purple-600/30 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/3"></div>

      {/* Contenedor Principal (Centrado) */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center gap-10">
        {/* TÍTULO ÉPICO */}
        <div className="text-center relative w-full">
          {/* Brillo detrás del texto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-yellow-500/20 blur-3xl"></div>

          <h1 className="text-5xl sm:text-6xl font-black uppercase italic leading-[1.1] tracking-tight relative z-10">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#FFD700] to-[#B8860B] drop-shadow-2xl filter">
              ¡Desata tu
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#FFD700] to-[#B8860B] drop-shadow-2xl filter mt-1">
              instinto
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#FFD700] to-[#B8860B] drop-shadow-2xl filter mt-1">
              ganador!
            </span>
          </h1>
        </div>

        {/* CATEGORÍAS NEÓN */}
        <div className="flex gap-4 w-full justify-center">
          <button className="flex-1 border-2 border-purple-500 rounded-xl py-3 px-2 flex flex-col items-center justify-center gap-1 bg-purple-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:-translate-y-1 transition-all duration-300">
            <span className="text-xl">🎰</span>
            <span className="font-bold text-purple-200 text-sm tracking-wide">
              Slots VIP
            </span>
          </button>

          <button className="flex-1 border-2 border-red-500 rounded-xl py-3 px-2 flex flex-col items-center justify-center gap-1 bg-red-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] hover:-translate-y-1 transition-all duration-300">
            <span className="text-xl">🃏</span>
            <span className="font-bold text-red-200 text-sm tracking-wide">
              Cartas
            </span>
          </button>
        </div>

        {/* TEXTO DE GANCHO */}
        <p className="text-center text-gray-300 font-medium text-sm md:text-base max-w-[280px]">
          La ruleta está girando. <br className="hidden sm:block" />
          <span className="text-white font-bold">
            Tu cuenta lista en 1 minuto.
          </span>
        </p>

        {/* BOTÓN GIGANTE WHATSAPP (CON ANIMACIÓN) */}
        <a href="#" className="relative group w-full flex justify-center mt-2">
          {/* Efecto de resplandor parpadeante (Pulse) detrás del botón */}
          <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition duration-500"></div>

          {/* Botón principal */}
          <div className="relative w-full py-5 px-6 bg-gradient-to-b from-[#25D366] to-[#128C7E] rounded-2xl border border-green-400/50 flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(37,211,102,0.5)] transform transition-transform duration-200 group-hover:scale-105">
            {/* Ícono de WhatsApp Blanco */}
            <svg
              className="w-10 h-10 text-white drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-white font-black text-xl md:text-2xl tracking-wide uppercase leading-none drop-shadow-md">
                Ingreso
              </span>
              <span className="text-white font-black text-xl md:text-2xl tracking-wide uppercase leading-none drop-shadow-md">
                Inmediato
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
