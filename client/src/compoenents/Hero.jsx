import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";

import hero_video from "../assets/videos/hero_video.mp4";
import image1 from "../assets/images/lekshelp.jpg";
import image2 from "../assets/images/seminar.jpg"; // Add as many images as needed
import image3 from "../assets/images/kultur.jpg"; 
import image4 from "../assets/images/idrett.jpg"; 
import image5 from "../assets/images/svomme.jpg"; 
import image6 from "../assets/images/fotball.jpg"; 
import VideoModal from "./VideoModal";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const phrases = [
    "Utdanning- leksehjelp",
    "motivasjon seminar",
    "undervisning kulturopplæring",
    "Idrett/Fritid",
    "svømmeopplæring",
    "Fotball- Cup og turneringer",
  ];

  const images = [image1, image2, image3, image4, image5, image6];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fadeInUp");
  const [imageAnimationClass, setImageAnimationClass] =
    useState("animate-fadeInUp");

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setAnimationClass("animate-fadeOutUp");
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setAnimationClass("animate-fadeInUp");
      }, 1000); // Duration of fade-out animation
    }, 4000); // Duration of each phrase cycle (2 seconds for display + 2 seconds for transition)

    const imageInterval = setInterval(() => {
      setImageAnimationClass("animate-fadeOutUp");
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => {
        setImageAnimationClass("animate-fadeInUp");
      }, 1000); // Small delay to ensure the class is removed before re-adding it
    }, 4000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(imageInterval);
    };
  }, [phrases.length, images.length]);

  return (
    <section className="w-full h-auto bg-white mt-32 lg:mt-10">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex-1 md:mr-6">
          <h2 className="text-sm font-bold text-gray-700 uppercase">
            Somalisk Østfold
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight md:leading-[55px]">
            Somalisk velferdsforening for Østfold{" "}
          </h1>
          <h1
            className={`text-3xl md:text-5xl font-bold mb-4 text-[#4733FF] transition-all duration-500 ease-in-out ${animationClass}`}
          >
            {phrases[currentPhraseIndex]}
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Somalisk velferdsforening for Østfold{" "}
            <span className="font-bold text-gray-900">
              er en frivillig organisasjon
            </span>{" "}
            for det somaliske samfunnet i Fredrikstad - Foreningen har som
            formål å arbeide for å sikre og forbedre det somaliske miljøet i
            Fredrikstad.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-8">
            <button className="bg-[#E73B3D] text-white px-6 py-3 rounded-full hover:bg-red-600">
              Bli Medlem
            </button>
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex justify-center items-center gap-3"
            >
              <FaPlay />
              Watch the video
            </button>

            <VideoModal
              isOpen={isModalOpen}
              onClose={closeModal}
              videoUrl={hero_video} // Replace with your video URL
              width="200px" // Customize width
              height="300px" // Customize height
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 text-gray-700">
            <p>“Utmerket kundeservice og support”</p>
            <span className="hidden md:block border-l border-gray-400 h-6"></span>
            <p>“One stop shop for community building”</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full md:w-60 h-60 md:h-80">
            <img
              src={images[currentImageIndex]}
              alt="Hero"
              className={`rounded-br-[80px] rounded-tl-[90px] rounded-tr-[70px] shadow-lg transition-all duration-500 ease-in-out w-full h-full object-cover ${imageAnimationClass}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
