import React from "react";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

export const Footer = () => {
  const date = new Date();

  
  return (
    <footer className="bg-[#FBF9F9] py-8 my-20">
       <div className="flex md:flex-row flex-col justify-between md:gap-0  gap-6 px-8">
          {/*  */}
          <div className="flex flex-col">
            <h1 className="md:mb-6 mb-2  text-[#4733FF] md:text-[18px]  font-serif font-bold">SOMALISK VELFERDSFORENING</h1>
            <div className="text-[#000]">
              <h3>Organisasjonsnummer: 991 731 784</h3>
              <h3>Postboks 129</h3>
              <h3>1601 FREDRIKSTAD</h3>
              <h3>Generel Epost: Info@svfo.no</h3>
              <h3>Teknisk Epost: it@Svfo.no</h3>
              <h3>Tlf: 413 21 841</h3>
              <Link>
               <button className="bg-[#000] text-white mt-2 text-[16px] px-2">VEDTEKTER</button>
              </Link>
            </div>
          </div>

          <div className="">
            <h1 className="md:mb-6 mb-2 text-[#4733FF] text-[18px] font-serif font-bold">Følg oss</h1>
            <div className="flex space-x-2">
              <FaInstagram className="text-2xl text-[#fd1d1d] cursor-pointer"/>
              <FaFacebook className="text-2xl text-[#1877F2] cursor-pointer"/>
            </div>
          </div>

          <div className="">
            <h1 className="md:mb-4 mb-2 text-[#4733FF] text-[18px] gap:pl-0 pl-2 font-serif font-bold">Vil Du Bli Partner Med SVF?</h1>
            
              <h2 className="font-serif text-[16px] font-normal gap:pl-0 pl-4 text-[#000]">Ta kontakt med oss på
                <Link>
                 <span> Info@svfo.no</span>
                </Link>
              </h2>
            
          </div>

          
         <div className="flex flex-col space-y-3 lg:ml-0 ml-2">
          <button className="bg-[#E73B3D] text-white lg:px-16 px-10  md:py-2 py-2 rounded-[10px] hover:bg-red-600">Bli medlem</button>
          <button className="bg-blue-600 text-white lg:px-16 px-10  md:py-2 py-2 rounded-[10px] hover:bg-blue-700 flex justify-center items-center">Kontakt oss</button>
         </div>
       </div>
       {/* sup footer */}
       <div className="pt-16">
        <hr className="border-blue-500 border-[-1px]"/>
        <p className="text-[#000] pt-6 px-10">Copyright © Somalisk velferds forening | All Rights Reserved. Design by IbraNett</p>
       </div>
    </footer>
  );
};
