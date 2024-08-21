// eslint-disable-next-line no-unused-vars
import { BackgroundVideo, HeroSection, Medlem, Samarbeid } from "../compoenents";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Medlem />
      <Samarbeid />
      <BackgroundVideo/>
    </div>
  );
};
