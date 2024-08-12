/* eslint-disable react/prop-types */
import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

const speakers = {
  external: [
    {
      name: "Dr. M. Sujithra",
      affiliation: "CIT, Coimbatore",
      profile:
        "https://www.cit.edu.in/faculty/msc-data-science-department/FAC6378312",
    },
  ],
  internal: [
    {
      name: "Dr. S. Baskar",
      affiliation: "Professor & Dean (R&D) TCE",
      profile: "https://example.com/baskar",
    },
    {
      name: "Dr. P. Venkatesh",
      affiliation: "Professor TCE",
      profile: "https://example.com/venkatesh",
    },
    {
      name: "Dr. C. Deisy",
      affiliation: "Professor TCE",
      profile: "https://example.com/deisy",
    },
    {
      name: "Dr. S. Padmavathi",
      affiliation: "Professor TCE",
      profile: "https://example.com/padmavathi",
    },
    {
      name: "Dr. P. Karthikeyan",
      affiliation: "Associate Professor TCE",
      profile: "https://example.com/karthikeyan",
    },
    {
      name: "Dr. A. M. Abirami",
      affiliation: "Associate Professor TCE",
      profile: "https://example.com/abirami",
    },
  ],
};

const SpeakerList = ({ title, speakers }) => (
  <div className="mt-[40px]">
    <h2 className="text-[#226E93] font-bold text-[20px] mb-[20px] underline">
      {title}
    </h2>
    <ul className="list-none p-0">
      {speakers.map((speaker, index) => (
        <li key={index} className="my-[10px]">
          {index + 1}.{speaker.name}, {speaker.affiliation}{" "}
          <a
            href={speaker.profile}
            className="text-[#61dafb]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function KeySpeakers() {
  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const heading = (
    <div className="flex flex-col items-center text-center">
      <h1
        className={`text-white font-bold ${
          isMobileScreen ? "text-[70px]" : "text-[40px]"
        }`}
      >
        Keynote Speakers
      </h1>
    </div>
  );

  /*const content = (
    <div className="w-full flex flex-col items-center">
      <div className={`${isMobileScreen ? "w-[70%]" : "w-[90%]"}`}>
      <h1 className="text-center font-semibold text-[#226E93] text-2xl">
        To be announced soon...
        <SpeakerList title="Internal Speakers" speakers={speakers.internal} />
      </h1>
      </div>
    </div>
  );*/

  const content = (
    <div className="w-full flex flex-col items-center">
      <div className={`${isMobileScreen ? "w-[70%]" : "w-[90%]"}`}>
        <SpeakerList title="Speakers" speakers={speakers.external} />
      </div>
    </div>
  );

  return (
    <div>
      <BackgroundComponent
        content={content}
        page={1}
        requiredMap={false}
        heading={heading}
        removeHeadingCSS={true}
      />
    </div>
  );
}

export default KeySpeakers;
