import ReactIcons from "@/assets/icons";
import MapComponent from "./MapComponent";
import { useState } from "react";

const EMAIL = "amitprofessional007@gmail.com";
const resumeUrl =
  "https://amit-general-bucket.s3.ap-south-1.amazonaws.com/pdf/resume.pdf";
const social_profile = [
  {
    title: "LinkedIn",
    icon: ReactIcons.linkedIn,
    link: "https://www.linkedin.com/in/amit-kumar-505084259/",
  },
  {
    title: "Github",
    icon: ReactIcons.github,
    link: "https://github.com/Kamit6337",
  },
  {
    title: "Mail",
    icon: ReactIcons.mail,
    link: `mailto:${EMAIL}`,
  },
];
const Contact = ({ ...props }) => {
  const location = { latitude: 25.266497, longitude: 82.989469 };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main {...props}>
      <p>Contact</p>
      <div className="h-[500px] w-full z-0">
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
      <div className="section_padding mt-40 mb-20 flex flex-col  items-center justify-center w-full">
        <div className="flex items-center gap-5">
          {social_profile.map((obj, i) => {
            const { icon, link } = obj;

            return (
              <a href={link} target="_blank" rel="noreferrer" key={i}>
                <div className="rounded-full p-4 dark:bg-slate-700 bg-white border border-slate-800 hover:bg-gray-100  text-3xl">
                  {icon}
                </div>
              </a>
            );
          })}
        </div>
        <p className="md:text-4xl text-3xl font-bold tracking-wide mt-20">
          Contact Me
        </p>
        <p className="md:text-2xl text-xl  font-semibold tracking-wider mt-6 mb-10">
          {EMAIL}
        </p>
        <a
          href={resumeUrl}
          target="_blank"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`${
              isHovered ? "gradient_link_shadow" : ""
            } py-3 px-10 text-lg font-semibold text-white tracking-wider rounded-lg gradient_link`}
          >
            Resume
          </div>
        </a>
      </div>
    </main>
  );
};

export default Contact;
