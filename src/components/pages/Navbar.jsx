import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageActions, languageSelector } from "../redux/sliceLanguage";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const language = useSelector(languageSelector)
  const { language_type, language_data } = language
  const { navbar } = language_data
  const dispatch = useDispatch()

  const handleSetLanguage = () => {
    if (language.language_type === "ESP") {
      dispatch(languageActions.setLanguageType("ENG"))
    }
    if (language.language_type === "ENG") {
      dispatch(languageActions.setLanguageType("ESP"))
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60  text-gray-900" : "text-white"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            L<span className="text-cyan-600">uc</span>a
          </h4>
        </div>
        <div
          className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"
            } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {navbar?.links?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <li key="language_button" className="px-6 hover:text-cyan-600">
              <button className="flex items-center" onClick={handleSetLanguage}>
                <ion-icon name="language-outline"></ion-icon>
                <p className="ml-1">
                  {language_type}
                </p>
              </button>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${open ? "text-gray-900" : "text-gray-100"
            } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
            }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {navbar?.links?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <li key="language_button" className="px-6 hover:text-cyan-600">
              <button className="flex items-center" onClick={handleSetLanguage}>
                <ion-icon name="language-outline"></ion-icon>
                <p className="ml-1">
                  {language_type}
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
