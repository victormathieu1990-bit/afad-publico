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
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function openForm(animal) {
    setSelectedAnimal(animal);
    setSent(false);
    setName("");
    setPhone("");
  }

  function closeForm() {
    setSelectedAnimal(null);
    setSent(false);
  }

  function submitForm(e) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) return;

    setSent(true);
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
        <div className="adoptionPaws">🐾</div>
        <h1>ADOPCIONES</h1>
        <p>Encuentra a tu nuevo compañero</p>
      </section>

      <section className="animalGrid">

        {animals.map((animal) => (
          <article className="animalCard" key={animal.name}>

            <div className="animalPhoto">
              <img src={animal.photo} alt={animal.name} />
            </div>

            <div className="animalInfo">
              <h2>{animal.name}</h2>

              <p>
                {animal.species} · {animal.sex}
              </p>

              <span>{animal.age}</span>

              <button
                className="viewAnimal"
                onClick={() => openForm(animal)}
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
        <div className="adoptionOverlay" onClick={closeForm}>

          <div
            className="adoptionModal"
            onClick={(e) => e.stopPropagation()}
          >

            {!sent ? (
              <>
                <button
                  className="modalClose"
                  onClick={closeForm}
                  aria-label="Cerrar"
                >
                  ×
                </button>

                <div className="modalPaws">🐾</div>

                <h2>
                  Quiero conocer a {selectedAnimal.name}
                </h2>

                <p className="modalText">
                  Déjanos tus datos y AFAD se pondrá en contacto contigo.
                </p>

                <form onSubmit={submitForm} className="interestForm">

                  <label>
                    Tu nombre
                    <input
                      type="text"
                      placeholder="Escribe tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Tu teléfono
                    <input
                      type="tel"
                      placeholder="10 dígitos"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength="10"
                      required
                    />
                  </label>

                  <button type="submit" className="submitBtn">
                    QUIERO CONOCERLO ❤️
                  </button>

                </form>
              </>
            ) : (
              <div className="success">

                <div className="successIcon">✓</div>

                <h2>¡Listo!</h2>

                <p>
                  AFAD recibió tus datos para conocer a{" "}
                  <strong>{selectedAnimal.name}</strong>.
                </p>

                <p>
                  Nos pondremos en contacto contigo.
                </p>

                <button
                  className="submitBtn"
                  onClick={closeForm}
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
