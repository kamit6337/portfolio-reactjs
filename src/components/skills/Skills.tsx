import { skillsList } from "@/constants";
import HorizontalSlider from "../HorizontalSlider";

const Skills = ({ ...props }) => {
  return (
    <div {...props} className="mb-72">
      <div className="section_padding  text-center space-y-2 mb-32">
        <p className="section_title">My Skills</p>
        <p className="section_intro ">
          A proficient in his skill and would love to collaborate with other
          peoples to make a big thing
        </p>
      </div>
      <HorizontalSlider>
        {skillsList.map((obj) => {
          const { id, image, name } = obj;

          return (
            <div key={id} className="space-y-3">
              <div className="size-20 mx-auto">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-center">{name}</p>
            </div>
          );
        })}
      </HorizontalSlider>
    </div>
  );
};

export default Skills;
