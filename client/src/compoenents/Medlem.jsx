// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookOutline, IoFootball } from "react-icons/io5";
import { GrSwim } from "react-icons/gr";

export const Medlem = () => {
  return (
    <div className="w-full flex flex-col mt-24">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            Medlemfordel!
          </h1>
          <p className="text-center text-[15px] lg:text-[17px] w-full lg:w-[80%] text-[#646464] font-serif font-normal">
            Ved å bli medlem støtter du oss aktivt med å betale din
            medlemskontingent,I tillegg mottar vi støtte fra Staten basert på
            antallet medlemmer. Sammen er vi sterke og ditt medlemskap er viktig
          </p>
        </div>

        {/*  */}
        <div className="w-full flex flex-col lg:flex-row justify-center gap-7 mt-14">
          <div className="flex flex-col w-full lg:w-[340px] bg-white gap-2 p-7 shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
            <IoBookOutline className="text-4xl text-[#E73B3D]" />
            <h3 className="text-xl text-[#222] font-medium cursor-pointer">
              Leksehjelp
            </h3>
            <p className="whitespace-normal text-gray-700 text-sm">
              På Somalisk velferds forening får medlemmene gratis hjelp til
              skolearbeid etter skoletid.
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[340px] bg-white gap-2 p-7 shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
            <IoFootball className="text-4xl text-[#E73B3D]" />
            <h3 className="text-xl text-[#222] font-medium cursor-pointer">
              Fotball
            </h3>
            <p className="whitespace-normal text-gray-700 text-sm">
              åpen for alle medlemmer i Fredrikstad. fotball bygger på
              grunnverdier som idrettsglede, felleskap og helse
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[340px] bg-white gap-2 p-7 shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
            <GrSwim className="text-4xl text-[#E73B3D]" />
            <h3 className="text-xl text-[#222] font-medium cursor-pointer">
              Svømming
            </h3>
            <p className="whitespace-normal text-gray-700 text-sm">
              Svømming er åpen for alle medlemmer i Fredrikstad , Vi har flere
              svømme lokaler rundt Fredrikstad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
