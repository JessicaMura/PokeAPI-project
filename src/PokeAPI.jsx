
/*import React, { useState, useEffect } from "react";
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
  */
  import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeAPI() {
  const [name, setName] = useState("sylveon");
  const [find, setFind] = useState("sylveon");
  const [img, setImg] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(null);

  const maxId = 1010; 

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${find.toLowerCase()}`);
        setImg(res.data.sprites.front_default);
        setType(res.data.types.map((t) => t.type.name).join(", "));
        setId(res.data.id);
        setHeight(res.data.height);
        setName(res.data.name);
      } catch (error) {
        console.error("Pokémon non trovato", error);
        setImg("");
        setType("Pokémon non trovato");
        setId(null);
        setHeight(null);
      }
    }

    getData();
  }, [find]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    if (name.trim() !== "") setFind(name.trim().toLowerCase());
    setName("");
  };

  const nextPokemon = () => {
    if (id < maxId) setFind((id + 1).toString());
  };

  const prevPokemon = () => {
    if (id > 1) setFind((id - 1).toString());
  };

  const firstPokemon = () => {
    setFind("1");
  };

  const lastPokemon = () => {
    setFind(maxId.toString());
  };

  return (
    <div className="back">
      <div className="card">
        {img && <img src={img} alt={find} />}
        <h1>N° Pokemon: {id ?? "?"}</h1>
        <h2>Altezza: {height ?? "?"}</h2>
        <div className="name">Name: {name}</div>
        <div className="type">Tipo: {type}</div>
        <input
          type="text"
          onChange={handleInputChange}
          value={name}
          placeholder="Cerca Pokémon"
        />
        <button onClick={handleSearch}>Search</button>
        <br />
        <button onClick={firstPokemon}>Primo</button>
        <button onClick={prevPokemon}>-1</button>
        <button onClick={nextPokemon}>+1</button>
        <button onClick={lastPokemon}>Ultimo</button>
      </div>
    </div>
  );
}
