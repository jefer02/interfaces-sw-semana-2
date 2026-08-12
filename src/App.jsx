import { useState } from "react";

export default function App() {
  const [activeDot, setActiveDot] = useState(0);
  const dots = [0, 1, 2, 3];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100 p-6">
      <div className="w-[300px] rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Foto del producto */}
        <div className="relative h-[380px]">
          <img
            src="/shoe.png"
            alt="Nike Airforce1 Premium"
            className="w-full h-full object-cover"
          />

          {/* Badge Best Seller */}
          <span className="absolute top-3 left-3 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
            Best Seller
          </span>

          {/* Logo Nike */}
          <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center">
            <NikeSwoosh className="h-4 w-4 text-black" />
          </div>

          {/* Indicadores del carrusel */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {dots.map((i) => (
              <button
                key={i}
                onClick={() => setActiveDot(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeDot === i ? "w-1.5 bg-white" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Ir a la imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info del producto */}
        <div className="px-5 pt-4 pb-5">
          <h2 className="text-lg font-bold text-neutral-900">
            Nike Airforce1 Premium
          </h2>
          <p className="mt-1 text-sm font-medium text-neutral-400">
            Own the Airforce
          </p>
          <p className="mt-2 text-sm leading-snug text-neutral-500">
            Step back into classic hoops style with a durable leather.
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="rounded-full bg-neutral-100 px-4 py-2 text-base font-semibold text-neutral-900">
              $111
            </span>

            <button className="flex items-center gap-2 rounded-full bg-black pl-4 pr-2 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors">
              Buy Now
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NikeSwoosh({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 16.5c3.5 2.2 7.6 2.7 11.2 1.3C18 16 21 12.7 22 9c-4.3 2.6-8.7 5-13.2 6.9C6.3 16.8 4 16.9 2 16.5z" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
