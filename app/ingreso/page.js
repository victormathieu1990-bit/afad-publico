"use client";

export default function IngresoAnimales() {
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
        <div className="detailIcon">🐾</div>

        <h1>INGRESO DE ANIMALES</h1>

        <p className="detailText">
          ¿Encontraste un animal que necesita ayuda?
          Cuéntanos su situación y podremos orientarte
          sobre cómo ayudarlo.
        </p>

        <div className="pendingBox">
          <span>❤️</span>

          <strong>
            Queremos ayudar
          </strong>

          <p>
            Estamos preparando el formulario para solicitar
            el ingreso de una mascota a AFAD.
          </p>
        </div>

        <button
          className="registerBtn"
          onClick={() =>
            (window.location.href = "/ingreso/registro")
          }
        >
          SOLICITAR INGRESO DE UNA MASCOTA →
        </button>
      </section>
    </main>
  );
}
