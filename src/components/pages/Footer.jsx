import React from "react";
import { useSelector } from "react-redux";
import { languageSelector } from "../redux/sliceLanguage";

const Footer = () => {
  const language = useSelector(languageSelector)

  return (
    <div className="flex justify-center items-center bg-gray-800 text-sm p-4 text-center text-white">
      <p>
        {language?.language_data.footer}
      </p>
    </div>
  );
};

export default Footer;
