import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
function Ideathon() {
  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const heading = (
    <div>
      <h1 className={`${isMobileScreen ? "text-[90px]" : "text-[30px]"}`}>
        Ideathon
      </h1>
    </div>
  );

  const content = (
    <div className="w-full flex justify-center my-[50px]">
      <div className={`${isMobileScreen ? "w-[70%]" : "w-[90%]"}`}>
        <h1 className="text-center font-semibold text-[#226E93] text-2xl">
          Everything Begins With An IDEA!
        </h1>
        <p className="mt-[30px] text-xl">
          Ideathon is an event that encourages budding entrepreneurs and
          recognizes the fast-growing start-up ecosystem in India. It provides
          participating teams an open platform to pitch their ideas for a
          business venture or improvements in existing technology in any field.
          These will be evaluated by a panel of judges based on innovation,
          feasibility, impact as well as the quality of the pitch. Participants
          are encouraged to register and refine their next big idea and their
          skill to convince!
        </p>

        <h1 className="text-2xl text-red-700 font-bold mt-[50px]">Overview</h1>
        <h1 className="text-xl text-[#226E93] font-semibold mt-[20px]">
          Important Dates:
        </h1>
        <p className="text-[18px] mt-[5px]">September 14, 2024</p>

        <h1 className="text-xl text-[#226E93] font-semibold mt-[20px]">
          Timing:
        </h1>
        <p className="text-[18px] mt-[5px]">9:00 AM - 12:00 PM</p>

        <h1 className="text-xl text-[#226E93] font-semibold mt-[20px]">
          Location:
        </h1>
        <p className="text-[18px] mt-[5px]">
          Department of Computer Science and Engineering,
        </p>
        <p className="text-[18px]">Thiagarajar College of Engineering,</p>
        <p className="text-[18px]">Madurai, Tamil Nadu, India</p>

        <h1 className="text-2xl text-red-700 font-bold mt-[50px]">
          General Rules
        </h1>
        <p className="text-[18px] mt-[5px]">
          &#x2022; The maximum number of participants in a Team is 3. Individual
          participation is also permitted.
        </p>
        <p className="text-[18px] mt-[5px]">
          &#x2022; The best-presenting team will be awarded.
        </p>
        <p className="text-[18px] mt-[5px]">
          &#x2022; The teams are expected to present innovative and
          well-researched ideas in the theme.
        </p>
        <p className="text-[18px] mt-[5px]">
          &#x2022; Everything is allowed in the presentation, including sound
          effects, video clips, and graphics.
        </p>
        <p className="text-[18px] mt-[5px]">
          &#x2022; Any action that violates the stated rules will result in
          immediate disqualification of the team from the competition.
        </p>

        <h1 className="text-2xl text-red-700 font-bold mt-[50px]">
          Rewards & Certifications
        </h1>
        <h1 className="text-xl text-[#226E93] font-semibold mt-[20px]">
          Winners:
        </h1>
        <p className="text-[18px] mt-[5px]">
          Will be provided with Prizes and Certificates.
        </p>
        <h1 className="text-xl text-[#226E93] font-semibold mt-[20px]">
          Participants:
        </h1>
        <p className="text-[18px] mt-[5px]">
          Will be provided with Certificates of Participation.
        </p>
        <Link
          className="bg-[#226E93] inline-block  w-fit mt-4 p-4  rounded-md text-white"
          target="_blank"
          to="https://forms.gle/MsCvywBpB2fTdrJJ6"
        >
          Register Now
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <BackgroundComponent
        heading={heading}
        content={content}
        page={3}
        requiredMap={false}
        removeHeadingCSS={false}
      />
    </div>
  );
}

export default Ideathon;
