"use client";

export default function Donaciones() {
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
        <div className="detailIcon">❤️</div>

        <h1>DONACIONES</h1>

        <p className="detailText">
          Tu ayuda nos permite seguir cuidando, alimentando
          y atendiendo a los animales que más lo necesitan.
        </p>

        <div className="donationOptions">

          <div className="donationItem">
            <span className="donationIcon">💳</span>
            <div>
              <strong>Donación con tarjeta</strong>
              <p>Próximamente disponible.</p>
            </div>
          </div>

          <div className="donationItem">
            <span className="donationIcon">🏦</span>
            <div>
              <strong>Transferencia bancaria</strong>
              <p>Próximamente disponible.</p>
            </div>
          </div>

          <button
            className="donationItem donationButton"
            onClick={() =>
              (window.location.href = "/donaciones/especie")
            }
          >
            <span className="donationIcon">📦</span>

            <div>
              <strong>DONACIÓN EN ESPECIE</strong>
              <p>Conoce los artículos que necesitamos.</p>
            </div>

            <span className="donationArrow">→</span>
          </button>

        </div>
      </section>
    </main>
  );
}
