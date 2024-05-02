import React, { useEffect, useState } from "react";
import { Formik, Form, Field} from "formik";
import PokeNavigasi from "../Component/NavigasiComponent";
import background from "../Asset/background.jpg";

const URL = "https://pokeapi.co/api/v2/pokemon";
const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

type Pokemon = {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

const useDebouncedValue = (inputValue: string | null, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

function PokemonInfo({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-row gap-10 text-left ">
      <div className="mt-14">
      <h2 className="font-bold">Pokemon Info</h2>
        <p>ID: {pokemon.id}</p>
        <p>Name: {pokemon.name}</p>
      </div>
      <div className="mt-6">
        <h3 className="font-bold">Stats:</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PokedexComponent() {
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  const debouncedSearchTerm = useDebouncedValue(search, 500);

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  const getPokemonDataByName = async (pokemonName: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/${pokemonName}`);
      const result = await response.json();

      if (response.ok) {
        setPokemonData(result);
        setLoading(false);
      } else throw new Error("get pokemon data by name failed!");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) getPokemonDataByName(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div
      className="flex justify-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <PokeNavigasi />
      <div className="flex justify-center items-center w-3/4 flex-col h-full bg-blue">
        <Formik
          initialValues={{ pokemonName: "" }}
          onSubmit={(values, { setSubmitting }) => {
            getPokemonDataByName(values.pokemonName);
            setSubmitting(false);
          }}>
          <Form>
            <Field
              type="text"
              name="pokemonName"
              placeholder="Pokemon Name"
              className="border border-slate-600 rounded-md px-4 py-2 mb-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md px-4 py-2 mt-2">
              Submit
            </button>
          </Form>
        </Formik>
        {!loading && pokemonData && (
          <div className="flex flex-row-reverse align-center justify-center bg-white w-2/5 p-16 border border-8 border-blue-500 rounded-xl shadow-2xl">
            <div>
              <PokemonInfo pokemon={pokemonData} />
            </div>
            <div className="mr-10">
              <img
                src={`${IMG_URL}${pokemonData.id}.png`}
                alt={pokemonData.name}
                className="w-60"
              />
            </div>
          </div>
        )}
        {loading && (
          <div className="animate-spin w-16 mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokedexComponent;
