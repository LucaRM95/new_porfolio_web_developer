import React from "react";
import aboutImg from "/assets/images/about.png";
import { useSelector } from "react-redux";
import { languageSelector } from "../redux/sliceLanguage";

const About = () => {
  const language = useSelector(languageSelector)
  const { language_type, language_data } = language
  const { about } = language_data

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          {about?.title} <span className="text-cyan-600">{about?.span_title}</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">{about?.sub_title}</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {about?.first_paragraph}
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {about?.second_paragraph}
              </p>
              <div className="flex mt-10 items-center gap-7">
                {about?.info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              { language_type === "ESP" ?(
                <a href="public/assets/pdf/Luca_Rojas_Massey_CV_Front-end_Español.pdf" download>
                  <button className="btn-primary">{about?.download_cv}</button>
                </a>
              ) : (
                <a href="public/assets/pdf/Luca_Rojas_Massey_CV_Front-end_English.pdf" download>
                  <button className="btn-primary">{about?.download_cv}</button>
                </a>
              )}
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
