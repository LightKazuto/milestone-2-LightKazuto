import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import PokeNavigasi from "../Component/NavigasiComponent";
import background from "../Asset/background.jpg";
import PokemonList from "../Component/PokemonList";
import Loading from "../Component/LoadingComponent";

const URL = "https://pokeapi.co/api/v2/pokemon";
const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

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
  types: {
    slot: number;
    type: {
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

function PokemonInfoByName({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col gap-10 text-center ">
      <div className="mt-6">
        <h2 className="font-bold">Pokemon Info</h2>
        <p>ID: {pokemon.id}</p>
        <p>Name: {pokemon.name}</p>
      </div>
      <div className="mt-1">
        <h3 className="font-bold">Stats:</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Type:</h2>
        <p>{pokemon.types.map((type) => type.type.name).join(" and ")}</p>
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
        setTimeout(() => {
          setPokemonData(result);
          setLoading(false);
        }, 2000);
      } else throw new Error("get pokemon data by name failed!");
    } catch (error) {
      alert(error);
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
      <div className="overflow-y-auto flex gap-5 ">
        <div className="bg-white h-full ">
          <div className="flex flex-col fixed">
            <Formik
              initialValues={{ pokemonName: "" }}
              onSubmit={(values, { setSubmitting }) => {
                getPokemonDataByName(values.pokemonName);
                setSubmitting(false);
              }}>
              <Form className="h-full max-h-96 pt-44 ">
                <Field
                  type="text"
                  name="pokemonName"
                  placeholder="Pokemon Name"
                  className="border border-slate-600 rounded-md px-4 py-2 mb-2 text-center"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white rounded-md px-4 py-2 mt-2">
                  Submit
                </button>
              </Form>
            </Formik>

            {!loading && pokemonData && (
              <div>
                <div className="flex flex-col-reverse bg-white w-full p-5 border border-8 border-blue-500">
                  <div>
                    <PokemonInfoByName pokemon={pokemonData} />
                  </div>
                  <div className="text-center">
                    <img
                      src={`${IMG_URL}${pokemonData.id}.png`}
                      alt={pokemonData.name}
                      className="w-60"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="item-center">
              <Loading isLoading={loading} />
            </div>
          </div>
        </div>
        <div className="h-full min-h-24 max-w-screen-xl pt-44 ml-80">
          <div className="ml-44">
            <PokeNavigasi PokeDex="/PokeDex" Home="/Dashboard" Games="/Games" />
          </div>
          <PokemonList />
        </div>
      </div>
    </div>
  );
}

export default PokedexComponent;
