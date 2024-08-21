import { TeamMember } from "../compoenents";
import the_board_image from "../assets/images/the-board-image.jpg";

import { images } from "../compoenents/images";
export const About = () => {
  const members = [
    {
      name: "Mohamed Ilmi Sibriye",
      position: "Chairman of the board",
      imgSrc: images.mohamedIlmiSibriye,
    },
    {
      name: "Mohamed Hassan Khalifa",
      position: "Next Leader",
      imgSrc: images.mohamedHassanKhalifa,
    },
    {
      name: "Mohamed Amaleti Abdi",
      position: "Secretary",
      imgSrc: images.mohamedAmaletiAbdi,
    },
    {
      name: "Ahmed Abdulkadir Hirsi",
      position: "Financial manager",
      imgSrc: images.ahmedAbulkadirHirsi,
    },
    {
      name: "Abukar Hassan Eyate",
      position: "Swimming responsibility",
      imgSrc: images.abukarHassan,
    },
    {
      name: "Abdirahin Hashi Mohamed",
      position: "Sports responsible",
      imgSrc: images.abdirihiimMohamedHashi,
    },
    {
      name: "Said Mohamed Ismail",
      position: "Organizer",
      imgSrc: images.saidMohamedAli,
    },
    {
      name: "Ahmed Khalif Ahmed",
      position: "Item",
      imgSrc: images.ahmedKhalifAhmed,
    },
  ];

  return (
    <div className="">
      <div className="relative w-full md:h-96 bg-opacity-75">
        <img
          src={the_board_image}
          alt="image"
          className="w-full h-full bg-black opacity-75"
        />
        <h1 className="absolute left-8 bottom-24 md:left-28 md:bottom-40 text-2xl md:text-5xl text-gray-500 font-serif font-light">
          The board
        </h1>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imgSrc={member.imgSrc}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700">
            If you would like to get in touch with us, please send us an email
            at{" "}
            <a
              href="mailto:info@svfo.no"
              className="text-blue-500 font-semibold"
            >
              Info@svfo.no
            </a>{" "}
            or click on contact us
          </p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded-full focus:outline-none">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
