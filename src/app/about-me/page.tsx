import BioSection from "./components/BioSection";
import DetailsSection from "./components/DetailsSection";

const AboutMePage = () => {
  return (
    <div className="grid laptop:grid-cols-2 grid-cols-1 h-full">
      <div className="border-r border-border-color h-full w-full">
        <DetailsSection />
      </div>
      <div>
        <BioSection />
      </div>
    </div>
  );
};

export default AboutMePage;
