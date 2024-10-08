import { useState, useEffect } from "react";
import Loading from "./LoadingComponent";

const URL = "https://pokeapi.co/api/v2/pokemon";
const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

interface PokemonResult {
  results: { name: string; url: string }[];
}

function PokemonList() {
  const [pokemonDatas, setPokemonDatas] = useState<PokemonResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(42);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    getAllPokemon(limit);
  }, [limit, offset]);

  const getAllPokemon = async (limit: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}?limit=${limit}&offset=${offset}`);
      const result = await response.json();

      if (response.ok) {
        setPokemonDatas(result);
      } else {
        throw new Error("Failed to get all Pokemon data!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextClick = () => {
    if (pokemonDatas?.results?.length === limit) {
      setOffset(offset + limit);
    }
  };

  const handlePrevClick = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Pokemon Database Sheet</h1>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Loading isLoading={loading} />
        ) : (
          pokemonDatas?.results.map((pokemon, index) => {
            const pokemonId = index + 1 + offset;
            return (
              <div
                key={`pokemon-${index}`}
                className="flex flex-row-reverse align-center justify-center bg-white w-96 h-38 gap-10 border border-8 border-blue-500 rounded-xl shadow-2xl m-2 p-2">
                <div className="mt-6">
                  <p>ID: {pokemonId}</p>
                  <p>Name: {pokemon.name}</p>
                </div>
                <div>
                  <img
                    src={`${IMG_URL}${pokemonId}.png`} 
                    alt={pokemon.name}
                    className="w-24"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-center w-full mt-4">
        {offset > 0 && (
          <button
            onClick={handlePrevClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Previous
          </button>
        )}
        {pokemonDatas?.results?.length === limit && (
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
