import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
const HomePage = ({ children }) => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties/>
    </>
  );
};

export default HomePage;
