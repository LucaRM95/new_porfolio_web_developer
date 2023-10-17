import React, { useEffect, useRef } from "react";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Project from "./components/pages/Project";
import Hireme from "./components/pages/Hireme";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";
import Bot from "./components/pages/Bot";
import { useDispatch, useSelector } from "react-redux";
import { languageActions, languageSelector } from "./components/redux/sliceLanguage";
import ESP from "./base/esp.json";
import ENG from "./base/eng.json";

const App = () => {
  const language = useSelector(languageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(languageActions.setLanguageType("ESP"))
    if(language.language_type === "ESP"){
      dispatch(languageActions.setLanguageData(ESP))
    }
    if(language.language_type === "ENG"){
      dispatch(languageActions.setLanguageData(ENG))
    }
  }, [language.language_type])

  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
