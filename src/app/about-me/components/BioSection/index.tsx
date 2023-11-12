import { education, experience, languages, technologies } from "./codes";
import CodeDisplay from "../CodeDisplay";

const BioSection = () => {
  return (
    <div className="px-4 pt-2">
      <CodeDisplay title="Education" source={education} />
      <CodeDisplay title="Experience" source={experience} />
      <CodeDisplay title="Languages" source={languages} />
      <CodeDisplay title="Technologies" source={technologies} />
    </div>
  );
};

export default BioSection;
