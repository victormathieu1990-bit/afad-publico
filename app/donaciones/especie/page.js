"use client";

import { useState } from "react";

export default function DonacionEnEspecie() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    donacion: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <main className="subscreen">
        <header className="subHeader">
          <button
            className="back"
            onClick={() => (window.location.href = "/donaciones")}
            aria-label="Regresar"
          >
            ‹
          </button>

          <img
            src="/afad-logo.png"
            alt="AFAD"
            className="smallLogo"
          />
        </header>

        <section className="detail">
          <div className="success">
            <div className="successIcon">✓</div>

            <h2>¡Muchas gracias!</h2>

            <p>
              Recibimos la información de tu donación en especie.
            </p>

            <p>
              AFAD se pondrá en contacto contigo para coordinar
              la entrega.
            </p>

            <button
              className="submitBtn"
              onClick={() =>
                (window.location.href = "/donaciones")
              }
            >
              VOLVER A DONACIONES
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="subscreen">
      <header className="subHeader">
        <button
          className="back"
          onClick={() => (window.location.href = "/donaciones")}
          aria-label="Regresar"
        >
          ‹
        </button>

        <img
          src="/afad-logo.png"
          alt="AFAD"
          className="smallLogo"
        />
      </header>

      <section className="detail">
        <div className="detailIcon">📦</div>

        <h1>DONACIÓN EN ESPECIE</h1>

        <p className="detailText">
          Cuéntanos qué deseas donar y nos pondremos en
          contacto contigo para coordinar la entrega.
        </p>

        <div
          className="adoptionModal"
          style={{ margin: "0 auto" }}
        >
          <form onSubmit={handleSubmit}>

            <label>
              Tu nombre
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nombre: e.target.value,
                  })
                }
                placeholder="Escribe tu nombre"
              />
            </label>

            <label>
              Tu teléfono
              <input
                type="tel"
                required
                value={form.telefono}
                onChange={(e) =>
                  setForm({
                    ...form,
                    telefono: e.target.value,
                  })
                }
                placeholder="10 dígitos"
              />
            </label>

            <label>
              ¿Qué donación estás dejando?
              <textarea
                required
                value={form.donacion}
                onChange={(e) =>
                  setForm({
                    ...form,
                    donacion: e.target.value,
                  })
                }
                placeholder="Ej. 10 kg de croquetas, cobijas, artículos de limpieza..."
                rows="4"
              />
            </label>

            <button
              className="submitBtn"
              type="submit"
            >
              QUIERO DONAR ❤️
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
