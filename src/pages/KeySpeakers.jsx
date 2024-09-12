/* eslint-disable react/prop-types */
import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

const speakers = {
  external: [
    {
      name: "Mr. Senthilkumar Murugesan",
      affiliation: "Founder - JioVio Healthcare",
      profile:
        "https://www.linkedin.com/in/senthilkumar-murugesan/",
        bio: "Senthilkumar Murugesan, the founder of JioVioHealthcare, is a visionary entrepreneur and technology mentor from Madurai,India. With a strong engineering background and a specialization in Startup Engineering from StanfordUniversity, he has made notable contributions.Holding over 10 patents, Senthilkumar previously led global companies like Samsung and Qualcomm before launching successful startups likeGeomeo and JioVio."
    },
    {
      name: "Vijay Sankar",
      affiliation: "Data Scientist - Ericsson",
      profile:
        "https://www.linkedin.com/in/vijay-sankar-3a9937170/",
        bio: "Vijay Sankar is aData Scientist at Ericsson and a graduate of Thiagarajar College of Engineering. Vijay has served as an evaluator and judge for the prestigious Smart IndiaHackathon - Software Edition’22.He is a dynamic and visionary professional, staying competitive in the ever-evolving global landscape."
    },
    {
      name: "Nirmal Jeyavelraj",
      affiliation: "Founder & Director Wizardlenz XR Studio(OPC) Private Limited",
      profile:
        "https://www.linkedin.com/in/nirmal-j/",
        bio: "Nirmal Jeyavelraj is aUnityXRDeveloper with expertise inVirtual Reality (VR),AugmentedReality (AR), and ExtendedReality (XR) technologies.He has a strong background in developing immersive solutions for various industries, including metaverse applications and interactive experiences.Notably, he pioneered India's first Physical Metaverse MScCourse and has mentored over 350 students in the field.His work spans innovative projects likeAI-powered virtual reality experiences and augmented reality applications, making significant contributions to cutting-edge technology in immersive environments"
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
          <p className="font-bold">{speaker.name}</p>{speaker.affiliation}{" "}
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
