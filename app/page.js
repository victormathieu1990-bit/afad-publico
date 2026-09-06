"use client";

import { useRouter } from "next/navigation";

const options = [
  ["ADOPCIONES", "🐾", "Encuentra a tu nuevo compañero", "adopciones", "/adopciones"],
  ["INFORMACIÓN\nESTERILIZACIONES", "✂", "Información y campañas", "esterilizaciones", "/esterilizaciones"],
  ["DONACIONES", "♥", "Ayúdanos a seguir ayudando", "donaciones", "/donaciones"],
  ["INGRESO\nDE ANIMALES", "⌂", "Solicita el ingreso de un animal", "ingreso", "/ingreso"],
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="screen">
      <div className="paw paw1">🐾</div>
      <div className="paw paw2">🐾</div>
      <div className="paw paw3">🐾</div>
      <div className="paw paw4">🐾</div>

      <header className="header">
        <img src="/afad-logo.png" alt="AFAD" className="logo" />
        <div className="tagline">
          Pequeñas acciones <span>hacen grandes cambios</span>
        </div>
      </header>

      <section className="grid" aria-label="Menú principal">
        {options.map(([title, icon, text, cls, path]) => (
          <button
            key={title}
            className={`card ${cls}`}
            onClick={() => router.push(path)}
          >
            <div className="cardIcon">{icon}</div>

            <div className="cardContent">
              <h2>
                {title.split("\n").map((x, i) => (
                  <span key={i}>
                    {x}
                    {i < title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <p>{text}</p>
            </div>

            <span className="arrow">›</span>
          </button>
        ))}
      </section>
    </main>
  );
}
