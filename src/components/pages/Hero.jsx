import React from "react";
import profilePhoto from "/assets/images/foto-perfil.jpg";
import { languageSelector } from "../redux/sliceLanguage";
import { useSelector } from "react-redux";

const Hero = () => {
  const language = useSelector(languageSelector)
  const { language_data } = language
  const { hero } = language_data

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center rounded-xl md:mt-0 mt-10 w-80 mt-20">
        <img src={profilePhoto} alt="" className="border-8 border-sky-500 2sm:w-[75%] md:w-6/12 h-full object-cover rounded-xl" />
      </div>
      <div className="flex-1 mt-5">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              {hero?.Cheer}
              <br />
            </span>
            {hero?.title} <span>{hero?.span_title}</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            {hero?.sub_title}
          </h4>
          <a className="w-[9.5rem] btn-primary mt-8" href="#contact">{hero?.contact_me}</a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {hero?.social_media?.map(({ icon, link }) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={link} target="_blank">
                  <ion-icon name={icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
