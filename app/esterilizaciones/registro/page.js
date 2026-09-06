"use client";

import { useState } from "react";

export default function RegistroEsterilizacion() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
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
            onClick={() => (window.location.href = "/esterilizaciones")}
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

            <h2>¡Listo!</h2>

            <p>
              Recibimos tus datos para registrar a tu mascota
              en el programa de esterilización.
            </p>

            <p>
              AFAD se pondrá en contacto contigo.
            </p>

            <button
              className="submitBtn"
              onClick={() =>
                (window.location.href = "/esterilizaciones")
              }
            >
              VOLVER A ESTERILIZACIONES
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
          onClick={() => (window.location.href = "/esterilizaciones")}
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
        <div className="detailIcon">🐾</div>

        <h1>REGISTRO</h1>

        <p className="detailText">
          Déjanos tus datos y nos pondremos en contacto
          contigo para darte información sobre el programa.
        </p>

        <div className="adoptionModal" style={{ margin: "0 auto" }}>
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

            <button className="submitBtn" type="submit">
              QUIERO REGISTRAR A MI MASCOTA ❤️
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
