/* eslint-disable react/prop-types */
import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

const speakers = {
  external: [
    {
      name: "Mr. Senthilkumar Murugesan",
      affiliation: "CIT, Coimbatore",
      profile:
        "https://www.linkedin.com/in/senthilkumar-murugesan/",
        bio: "Senthilkumar Murugesan is an accomplished entrepreneur, technology explorer, and mentor from Madurai, Tamilnadu, India. With a deep passion for leveraging technology to solve real-world problems, he has made significant innovations in wireless networks, defense, maternal healthcare, and safety solutions, holding over 10 patents. After starting his career as an engineer with global giants like Samsung and Qualcomm, Senthilkumar transitioned into entrepreneurship, founding two tech startups—Geomeo in urban infrastructure and JioVio in healthcare. His vision centers on building self-sustaining, technology-enabled communities by bridging the digital divide and empowering vulnerable populations, particularly women. Through his non-profit organization, MetooMentor, he has mentored over 1,000 young women in Madurai. A sought-after speaker and educator, Senthilkumar has delivered guest lectures at more than 80 institutions and has been recognized as one of India’s top technology explorers by Nasscom. He continues to contribute to the open-source ecosystem while exploring new avenues for innovation."
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
          {speaker.name}, {speaker.affiliation}{" "}
          <a
            href={speaker.profile}
            className="text-[#61dafb]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
          <br />
          {speaker.bio}
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
