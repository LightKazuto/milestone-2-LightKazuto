import React from "react";

interface FooterComponentProps {
  title: string;
  copyRight: string;
}

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  return (
    <div className="flex align-center justify-center">
      <div className="bg-white absolute bottom-16 w-2/4 rounded-lg shadow-2xl border border-1 border-grey-500 p-2 text-gray-600">
        <h1 className="font-bold ">{props.title}</h1>
        <p>{props.copyRight}</p>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const copyRight = "\u00A9 Copyright by Ilham Sidiq mlstn2 2024";
  return (
    <div>
      <FooterComponent
        title="Ilham Sidiq-T4-Amsterdam"
        copyRight={copyRight}
      />
    </div>
  );
};

export default Footer;
