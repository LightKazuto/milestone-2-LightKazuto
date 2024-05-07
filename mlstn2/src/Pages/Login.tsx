import React from "react";
import background from "../Asset/background.jpg";
import PokeLogin from "../Component/LoginComponent";
import PokeRegister from "../Component/RegisterComponent";
import Footer from "../Component/FooterComponent";

const LoginComponent = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div
      className="relative min-h-screen "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between min-h-screen ">
        <div className="flex items-center justify-center gap-5 mt-10">
          <PokeLogin />
          <PokeRegister />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
