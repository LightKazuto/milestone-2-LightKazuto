import PokeNavigasi from "../Component/NavigasiComponent";
import background from "../Asset/background.jpg";
import HomeComponent from "./Home";

function DahsboardComponent() {
  return (
    <div
      className="overflow-y-scroll"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex justify-center h-screen">
          <PokeNavigasi />
          <HomeComponent />
      </div>
    </div>
  );
}

export default DahsboardComponent;
