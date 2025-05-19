import { useState } from "react";
import { Pokemon } from "./interfaces";
import PokeAPI from "./PokeAPI";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon>({
    abilities: [],
    base_experience: 184,
    cries: { latest: "", legacy: "" },
    forms: { name: "", url: "" },
    game_indices: [],
    height: 10,
    held_items: [],
    id: 700,
    is_default: true,
    location_area_encounters: "",
    moves: [],
    name: "Sylveon",
    order: 224,
    species: { name: "", url: "" },
    stats: [],
    types: [
      {
        slot: 1,
        type: { name: "", url: "" },
      },
    ],
    weight: 235,
  });

  return (
    <div>
      <PokeAPI />
      <h1>Pokemon ID: {currentPokemon}</h1>
      <p>Name: {pokemon.name}</p>
    </div>
  );
}


export default App;
