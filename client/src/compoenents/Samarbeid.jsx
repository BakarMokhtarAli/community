// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo-white.png";
import Sss from "../assets/images/pling-1.gif";
import Sarp from "../assets/images/sso.png";

export const Samarbeid = () => {
  return (
    <div className="mt-[120px] w-full">
      <h1 className="text-center text-2xl font-bold text-[#222]">
        <span className="text-[#4733FF]">Våre </span>
        Samarbeidspartnerer!
      </h1>
      <div className="flex flex-wrap justify-center pt-12 gap-10">
        <Link>
          <img
            src={logo1}
            alt="logo1"
            className="w-[240px] md:w-[200px] sm:w-[150px]"
          />
        </Link>
        <Link>
          <img
            src={Sarp}
            alt="logo1"
            className="w-[240px] md:w-[200px] sm:w-[150px]"
          />
        </Link>
        <Link>
          <img
            src={Sss}
            alt="logo1"
            className="w-[240px] md:w-[200px] sm:w-[150px]"
          />
        </Link>
      </div>
    </div>
  );
};
