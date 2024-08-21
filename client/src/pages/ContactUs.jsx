import shutterstock from "../assets/images/shutterstock.jpg";

export const ContactUs = () => {
  return (
    <div className="min-h-screen my-10">
      <div className="relative w-full bg-black bg-opacity-75">
        <img src={shutterstock} alt="image" className="object-contain" />
        <h1 className="absolute left-14 bottom-10 md:left-28 md:bottom-40 text-2xl md:text-5xl text-gray-500 font-serif font-light">
          Contact Us
        </h1>
      </div>

      <div className="my-4 w-[90%] mx-auto flex flex-col">
        <h1 className="font-semibold text-3xl my-2">Contact Us</h1>
        <p>
          Do you have a thought or idea you would like to share with us? A tip
          on how we can improve in the work we do? We would love to hear from
          you!
        </p>
      </div>

      <form className="w-[90%] mx-auto my-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First name"
            />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              type="text"
              placeholder="Surname"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone/Mobile <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone/Mobile"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            id="address"
            type="text"
            placeholder="Address"
          />
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="postOffice"
              type="text"
              placeholder="Post office"
            />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="postalCode"
              type="text"
              placeholder="Postal code"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="request"
          >
            What is the request about?
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="request"
            rows="4"
            placeholder="Your request here"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[#4733FF] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
