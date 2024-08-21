import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../compoenents";
import { Home, ContactUs, About } from "../pages";

// All routes for the community website
export const AllRoutes = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
};
