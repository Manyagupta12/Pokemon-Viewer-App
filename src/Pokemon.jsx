import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

function Pokemon() {
  const [num, setNum] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setPokemon(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [num]);

  return (
    <>
      <h1>you have clicked {num}</h1>
      {pokemon && (
        <>
        <img src={pokemon.sprites.front_default} alt="" className="img"/>
          <h1>name is {pokemon.name}</h1>
          <h1>weight is {pokemon.weight}</h1>
          <h1>height is {pokemon.height}</h1>
        </>
      )}

      <select value={num} onChange={(event) => setNum(event.target.value)}>
        <option value={1}>1</option>
        <option value={25}>25</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </>
  );
}

export default Pokemon;

