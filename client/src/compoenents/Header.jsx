import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathRoute = (route) => {
    return route === location.pathname;
  };

  return (
    <div className="w-full h-20 sticky z-10 top-0 left-0 right-0">
      <div
        className={`py-6 px-8 ${
          isSticky ? "sticky top-0 right-0 bg-[#fff]" : "bg-[#FBF9F9]"
        }`}
      >
        <div className="flex justify-between items-center mx-auto">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={Logo} alt="logo" />
            <span className="text-4xl tracking-tight text-[#4733FF]">SVF</span>
          </div>

          {/* menu */}
          <div className="hidden lg:flex space-x-10 items-center">
            <ul className="flex items-center gap-10">
              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("/") && "text-[#E73B3D]"
                }`}
                onClick={() => navigate("/")}
              >
                Hjem
              </li>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => navigate("/")}
              >
                Nyhet
              </li>

              <div
                className={`text-[17px] relative flex cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => setDropDown((prev) => !prev)}
              >
                <li>Nyhet</li>
                {!dropDown ? (
                  <IoMdArrowDropup className="text-2xl" />
                ) : (
                  <RiArrowDropDownLine className="text-2xl" />
                )}

                {dropDown && (
                  <div className="absolute bg-[#191919] ease-in-out duration-150 rounded flex flex-col p-4 gap-3 text-white w-56 h-60 top-10">
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Community
                    </span>
                    <hr className="h-[1px]"/>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Galleri
                    </span>
                    <hr className="h-[1px]"/>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Arrangement
                    </span>
                    <hr className="h-[1px]"/>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Svømming
                    </span>
                    <hr className="h-[1px]"/>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Fotball
                    </span>
                    <hr className="h-[1px]"/>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Lekshelp
                    </span>
                  </div>
                )}
              </div>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => navigate("/about")}
              >
                Om oss
              </li>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => navigate("/contact-us")}
              >
                Kontakt oss
              </li>
            </ul>
            <button className="bg-[#E73B3D] text-white font-serif font-bold py-2 px-6 rounded">
              <Link>Bli medlem</Link>
            </button>
          </div>

          {/* mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-[#4733FF]" />
              ) : (
                <FaBars className="text-2xl text-[#4733FF]" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-start space-y-4 mt-4">
            <ul className="flex flex-col items-start space-y-4">
              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("/") && "text-[#E73B3D]"
                }`}
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Hjem
              </li>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Nyhet
              </li>

              <div
                className={`text-[17px] relative flex cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => setDropDown((prev) => !prev)}
              >
                <li>Nyhet</li>
                {!dropDown ? (
                  <IoMdArrowDropup className="text-2xl" />
                ) : (
                  <RiArrowDropDownLine className="text-2xl" />
                )}
                {dropDown && (
                  <div className="absolute bg-[#191919] ease-in-out duration-150 rounded flex flex-col p-4 gap-2 text-white w-52 h-52 top-10">
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Community
                    </span>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Galleri
                    </span>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Galleri
                    </span>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Galleri
                    </span>
                    <span className="text-[17px] cursor-pointer font-serif font-normal text-white pl-3">
                      Galleri
                    </span>
                  </div>
                )}
              </div>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => {
                  navigate("/about");
                  setMenuOpen(false);
                }}
              >
                Om oss
              </li>

              <li
                className={`text-[17px] cursor-pointer font-serif font-normal text-[#4733FF] ${
                  pathRoute("") && "text-[#E73B3D]"
                }`}
                onClick={() => {
                  navigate("/contact-us");
                  setMenuOpen(false);
                }}
              >
                Kontakt oss
              </li>
            </ul>
            <button className="bg-[#E73B3D] text-white font-serif font-bold py-2 px-6 rounded">
              <Link onClick={() => setMenuOpen(false)}>Bli medlem</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
