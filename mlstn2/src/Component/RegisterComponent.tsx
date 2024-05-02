import { useNavigate } from "react-router-dom";
import pika from "../Asset/pika.png";

export default function PokeRegister() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border border-1 rounded-lg bg-white shadow-2xl">
        <h1 className="p-2 text-xl font-mono bg-orange-500 m-5 rounded-md text-white">Join the Pokémon Dex</h1>
        <div>
          <p className="text-justify px-5 mb-10 ">
            Create a Pokémon Dex account today!! With a Pokémon Dex
            account, you can see Pokemon like pokedex on the game! 
          </p>
          <div className="bg-red-500 p-1 flex items-center justify-center gap-10 rounded-b-lg">
            <img src={pika} alt="Pokemon Logo" className="w-40"/>
            <a onClick={() => navigate("/newRegister")} className="text-xl mr-5 text-white  hover:underline font-medium cursor-pointer">
                <p>Register Here</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
