"use client";

const animals = [
  { name: "Aventurero", species: "Perro", sex: "Macho", age: "2 años", tone: "dog" },
  { name: "Rosie", species: "Gata", sex: "Hembra", age: "2 meses", tone: "cat" },
  { name: "Manchas", species: "Perro", sex: "Macho", age: "3 años", tone: "dog2" },
  { name: "Wini", species: "Perra", sex: "Hembra", age: "Adulto", tone: "dog3" },
];

export default function Adopciones() {
  return (
    <main className="adoptionPage">
      <header className="adoptionHeader">
        <button className="backButton" onClick={() => (window.location.href = "/")} aria-label="Regresar">‹</button>
        <img src="/afad-logo.png" alt="AFAD" />
        <div className="headerSpacer" />
      </header>

      <section className="adoptionIntro">
        <h1>ADOPCIONES</h1>
        <p>Encuentra a tu nuevo compañero</p>
      </section>

      <section className="animalGrid">
        {animals.map((animal) => (
          <button className="animalCard" key={animal.name}>
            <div className={`animalPhoto ${animal.tone}`}>
              <span>{animal.species === "Gata" ? "🐱" : "🐶"}</span>
            </div>
            <div className="animalInfo">
              <h2>{animal.name}</h2>
              <p>{animal.sex} · {animal.age}</p>
              <span className="viewAnimal">CONOCERLO&nbsp; →</span>
            </div>
          </button>
        ))}
      </section>

      <p className="adoptionFooter">Todos nuestros animales merecen una familia.</p>
    </main>
  );
}
