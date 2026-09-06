"use client";

export default function Esterilizaciones() {
  return (
    <main className="subscreen">
      <header className="subHeader">
        <button
          className="back"
          onClick={() => (window.location.href = "/")}
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
        <div className="detailIcon">✂️</div>

        <h1>ESTERILIZACIONES</h1>

        <p className="detailText">
          Estamos preparando información sobre nuestras
          campañas y programas de esterilización.
        </p>

        <div className="pendingBox">
          <span>🐾</span>
          <strong>Información próximamente</strong>
          <p>
            Aquí encontrarás información sobre campañas,
            requisitos y fechas disponibles.
          </p>
        </div>

        <button
          className="registerBtn"
          onClick={() =>
            (window.location.href = "/esterilizaciones/registro")
          }
        >
          DESEO REGISTRAR A UNA MASCOTA →
        </button>
      </section>
    </main>
  );
}
