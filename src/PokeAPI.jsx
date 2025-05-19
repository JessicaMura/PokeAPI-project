
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeAPI() {
  const [name, setname] = useState("sylveon");  
  const [Find, setFind] = useState("sylveon");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find.toLowerCase()}`);
        console.log(res);
        setImg(res.data.sprites.front_default);
        setType(res.data.types.map(t => t.type.name).join(", "));
      } catch (error) {
        console.error("Pokémon non trovato", error);
        setImg("");
        setType("Pokémon non trovato");
      }
    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name.trim() !== "") setFind(name.trim().toLowerCase());
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className="card">
          {Img && <img src={Img} alt={Find} />}
          <div className="name">{Find.toUpperCase()}</div>
          <div className="type">Tipo: {Type}</div>
          <input type="text" onChange={Typename} value={name} placeholder="Cerca Pokémon" />
          <button onClick={Search}>Search</button>
        </div>
      </div>
    </>
  );
}
let pokemon;
fetch("pokemon.json-master/pokedex.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    pokemon = data.slice(0, 151);
    console.log(pokemon);
    generateCards(pokemon);
  })
  .catch((err) => {});