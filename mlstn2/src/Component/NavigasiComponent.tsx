import logoPika from "../Asset/logoPika.png";
import arrow from "../Asset/arrow.png";
import logoPokeball from "../Asset/logoPokeball.png";
import { useNavigate } from "react-router-dom";

interface PokeNavigasiProps {
  PokeDex: string;
  Home: string;
  Games: string;
}

export default function PokeNavigasi(props: PokeNavigasiProps) {
  const navigate = useNavigate();

  function toPokedex() {
    navigate(props.PokeDex);
  }
  function toHome() {
    navigate(props.Home);
  }

  function toGame() {
    navigate(props.Games);
  }

  async function handleLogout(event: any) {
    event.preventDefault();
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/logout",
        options
      );
      if (!response.ok) {
        throw new Error("failed to logout");
      }
      const result = await response.json();
      console.log(result.token);

      setTimeout(() => {
        alert("Logout Success");
        localStorage.clear();
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <nav className=" top-10 fixed w-2/4 px-5 shadow-xl border border-black-700 border-2 rounded-xl bg-white">
      <div className="flex justify-center">
        <ul className="flex gap-20 justify-center flex-reverse">
          <li
            onClick={toHome}
            className="flex flex-col items-center justify-center w-28 border-b-8 border-gray-500 hover:bg-gray-500 transition duration-300 ease-in-out group cursor-pointer 0">
            <img
              src={logoPika}
              alt="logo-pika-navbar"
              className="w-9 mt-3 group-hover:brightness-200"
            />
            <p className="mt3 text-lg font-medium group-hover:text-white">
              Home
            </p>
          </li>

          <li
            onClick={toPokedex}
            className="flex flex-col items-center justify-center w-28 border-b-8 border-red-500 hover:bg-red-500 transition duration-300 ease-in-out group cursor-pointer">
            <img
              src={logoPokeball}
              alt="logo-pokeball-navbar"
              className="w-9 mt-3 group-hover:brightness-200"
            />
            <p className="mt-3 text-lg font-medium group-hover:text-white">
              Pokedex
            </p>
          </li>

          <li
            onClick={toGame}
            className="flex flex-col items-center justify-center w-28 border-b-8 border-orange-500 hover:bg-orange-500 transition duration-300 ease-in-out group cursor-pointer">
            <img
              src={arrow}
              alt="logo-arrow-navbar"
              className="w-9 mt-3 group-hover:brightness-200"
            />
            <p className="mt-3 text-lg font-medium group-hover:text-white">
              Games
            </p>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="right-5 top-3 absolute bg-red-500 p-2 text-white rounded-lg font-medium">
          Logout
        </button>
      </div>
    </nav>
  );
}
