import background from "../Asset/background.jpg";
import PokeNavigasi from "../Component/NavigasiComponent";
import pokemonGba from "../Asset/pokemonGba.jpg"
import pokemonSwitch from "../Asset/pokemonSwitch.png"
import poke_game_switch from "../Asset/poke_game_switch.jpg"
import pokemonSwitch2 from "../Asset/pokemonSwitch2.png"

function PokemonGames() {

  return (
    <div
      className="flex justify-center items-center h-screen overflow-y-scroll"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-2/4 mt-96 h-screen mb-10">
        <PokeNavigasi />
        <div className="grid grid-rows-4 grid-cols-4 w-auto h-auto gap-4">
          <div className="col-span-4 row-span-2 ">
            <img src={pokemonSwitch} alt="game switch" className="w-full"/>
            <h3 className="font-bold text-lg mt-5">Games Pokemon on Nintendo Switch</h3>
            <p className="mb-5">Pokemon games on the Switch have the best and best 
                features where players are pampered with various scenes and 
                images that are very modern, but don't lose the feel of Pokemon.</p>
          </div>
          <div className="col-start-1 row-span-2 col-span-2">
            <img src={poke_game_switch} alt="game play" className="w-full h-full" />
          </div>
          <div className="col-start-3 col-span-2 row-span-2">
            <img src={pokemonSwitch2} alt="gamplay 2" className="w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonGames;
