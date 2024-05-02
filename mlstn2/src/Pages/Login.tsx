import PokeLogin from "../Component/LoginComponent";
import PokeRegister from "../Component/RegisterComponent";
import background from "../Asset/background.jpg";


const LoginComponent = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex items-center justify-center gap-5">
        <PokeLogin />
        <PokeRegister />
      </div>
    </div>
  );
};

export default LoginComponent;
