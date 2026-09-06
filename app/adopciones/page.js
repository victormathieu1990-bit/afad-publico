"use client";

import { useState } from "react";

const animals = [
  {
    name: "Rosie",
    species: "Gata",
    sex: "Hembra",
    age: "2 meses",
    photo: "/rosie.jpg",
  },
  {
    name: "Aventurero",
    species: "Perro",
    sex: "Macho",
    age: "2 años",
    photo: "/aventurero.jpg",
  },
  {
    name: "Wini",
    species: "Perra",
    sex: "Hembra",
    age: "10 años",
    photo: "/wini.jpg",
  },
  {
    name: "Tope",
    species: "Perro",
    sex: "Macho",
    age: "Adulto",
    photo: "/tope.jpg",
  },
];

export default function Adopciones() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function closeModal() {
    setSelectedAnimal(null);
    setSubmitted(false);
  }

  return (
    <main className="adoptionPage">

      <header className="adoptionHeader">
        <button
          className="backButton"
          onClick={() => (window.location.href = "/")}
          aria-label="Regresar"
        >
          ‹
        </button>

        <img src="/afad-logo.png" alt="AFAD" />

        <div className="headerSpacer" />
      </header>

      <section className="adoptionIntro">
        <div className="sectionPaws">🐾</div>

        <h1>ADOPCIONES</h1>

        <p>
          Encuentra a tu nuevo compañero
        </p>
      </section>

      <section className="animalGrid">

        {animals.map((animal) => (
          <article className="animalCard" key={animal.name}>

            <div className="animalPhoto">
              <img
                src={animal.photo}
                alt={animal.name}
              />
            </div>

            <div className="animalInfo">

              <h2>{animal.name}</h2>

              <p>
                {animal.species} · {animal.sex}
              </p>

              <strong>
                {animal.age}
              </strong>

              <button
                className="viewAnimal"
                onClick={() => {
                  setSelectedAnimal(animal);
                  setSubmitted(false);
                }}
              >
                CONOCERLO →
              </button>

            </div>

          </article>
        ))}

      </section>

      <p className="adoptionFooter">
        Todos nuestros animales merecen una familia. 🐾
      </p>


      {selectedAnimal && (

        <div className="modalOverlay">

          <div className="interestModal">

            {!submitted ? (

              <>
                <button
                  className="modalClose"
                  onClick={closeModal}
                >
                  ×
                </button>

                <div className="modalPaws">
                  🐾
                </div>

                <h2>
                  Quiero conocer a {selectedAnimal.name}
                </h2>

                <p>
                  Déjanos tus datos y AFAD se pondrá
                  en contacto contigo.
                </p>

                <form onSubmit={handleSubmit}>

                  <label>
                    Tu nombre
                  </label>

                  <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    required
                  />

                  <label>
                    Tu teléfono
                  </label>

                  <input
                    type="tel"
                    placeholder="10 dígitos"
                    maxLength="10"
                    required
                  />

                  <button
                    type="submit"
                    className="submitBtn"
                  >
                    QUIERO CONOCERLO ❤️
                  </button>

                </form>
              </>

            ) : (

              <div className="success">

                <div className="successIcon">
                  ✓
                </div>

                <h2>
                  ¡Listo!
                </h2>

                <p>
                  AFAD recibió tus datos para conocer a
                  <strong> {selectedAnimal.name}</strong>.
                </p>

                <p>
                  Nos pondremos en contacto contigo.
                </p>

                <button
                  className="submitBtn"
                  onClick={closeModal}
                >
                  VOLVER A ADOPCIONES
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  );
}
