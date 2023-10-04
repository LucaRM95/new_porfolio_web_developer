import React from "react";
import hireMe from "../../assets/images/hireMe.png";
import { useSelector } from "react-redux";
import { languageSelector } from "../redux/sliceLanguage";

const Hireme = () => {
  const language = useSelector(languageSelector)
  const { language_data } = language
  const { hire_me } = language_data

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          {hire_me?.title}<span className="text-cyan-600">{hire_me?.span_title}</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">{hire_me?.sub_title}</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          {hire_me?.paragraph_title}
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            {hire_me?.first_paragraph}
          </p>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            {hire_me?.second_paragraph}
          </p>
          <a className="w-[8.5rem] btn-primary mt-10" href="#contact">{hire_me?.button}</a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-8 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
