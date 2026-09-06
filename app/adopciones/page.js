"use client";

import { useState } from "react";

const animals = [
  {
    name: "Aventurero",
    species: "Perro",
    sex: "Macho",
    age: "2 años",
    emoji: "🐶",
  },
  {
    name: "Rosie",
    species: "Gata",
    sex: "Hembra",
    age: "2 meses",
    emoji: "🐱",
  },
  {
    name: "Manchas",
    species: "Perro",
    sex: "Macho",
    age: "4 años",
    emoji: "🐶",
  },
  {
    name: "Wini",
    species: "Perra",
    sex: "Hembra",
    age: "10 años",
    emoji: "🐶",
  },
];

export default function Adopciones() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
  });

  function openForm(animal) {
    setSelectedAnimal(animal);
    setSent(false);
    setForm({ nombre: "", telefono: "" });
  }

  function closeForm() {
    setSelectedAnimal(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        <div className="introPaw">🐾</div>
        <h1>ADOPCIONES</h1>
        <p>Encuentra a tu nuevo compañero</p>
      </section>

      <section className="animalGrid">

        {animals.map((animal) => (
          <article className="animalCard" key={animal.name}>

            <div className="animalPhoto">
              <div className="animalEmoji">
                {animal.emoji}
              </div>
            </div>

            <div className="animalInfo">

              <div>
                <h2>{animal.name}</h2>

                <p className="animalDetails">
                  {animal.species} · {animal.sex}
                </p>

                <p className="animalAge">
                  {animal.age}
                </p>
              </div>

              <button
                className="viewAnimal"
                onClick={() => openForm(animal)}
              >
                CONOCERLO <span>→</span>
              </button>

            </div>

          </article>
        ))}

      </section>

      <p className="adoptionFooter">
        Todos nuestros animales merecen una familia. 🐾
      </p>

      {selectedAnimal && (

        <div className="modalOverlay" onClick={closeForm}>

          <div
            className="adoptionModal"
            onClick={(e) => e.stopPropagation()}
          >

            {!sent ? (

              <>
                <button
                  className="closeModal"
                  onClick={closeForm}
                  aria-label="Cerrar"
                >
                  ×
                </button>

                <div className="modalPaw">🐾</div>

                <h2>
                  Quiero conocer a {selectedAnimal.name}
                </h2>

                <p className="modalText">
                  Déjanos tus datos y AFAD se pondrá en contacto contigo.
                </p>

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
                    QUIERO CONOCERLO ❤️
                  </button>

                </form>
              </>

            ) : (

              <div className="success">

                <div className="successIcon">
                  ✓
                </div>

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
