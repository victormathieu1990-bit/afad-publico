"use client";

export default function RegistroIngreso() {
  return (
    <main className="subscreen">
      <header className="subHeader">
        <button
          className="back"
          onClick={() => (window.location.href = "/ingreso")}
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

        <h1>SOLICITAR INGRESO</h1>

        <p className="detailText">
          Estamos preparando el formulario para solicitar
          el ingreso de una mascota a AFAD.
        </p>

        <div className="pendingBox">
          <span>❤️</span>

          <strong>Formulario próximamente</strong>

          <p>
            Muy pronto podrás enviarnos desde aquí la
            información necesaria para solicitar ayuda
            para una mascota.
          </p>
        </div>

        <button
          className="registerBtn"
          onClick={() => (window.location.href = "/ingreso")}
        >
          VOLVER A INGRESO DE ANIMALES
        </button>
      </section>
    </main>
  );
}
