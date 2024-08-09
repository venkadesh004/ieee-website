import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

function HomePage() {
  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const heading = (
    <div className="flex flex-col items-center text-center">
      <h1
        className={`text-white font-bold ${
          isMobileScreen ? "text-[50px]" : "text-[20px]"
        }`}
      >
        IEEE CS Global Event
      </h1>
      <h2
        className={`text-white font-bold ${
          isMobileScreen ? "text-[30px]" : "text-[15px]"
        }`}
      >
        Generative AI: Unlocking Creativity and Automation
      </h2>
      <p
        className={`text-[#ff9900] font-bold ${
          isMobileScreen ? "text-[30px]" : "text-[15px]"
        }`}
      >
        (Inclusive of Ideathon)
      </p>
      <p
        className={`text-[#ff9900] font-bold ${
          isMobileScreen ? "text-[30px]" : "text-[15px]"
        }`}
      >
        13 - 14, September 2024
      </p>
    </div>
  );

  const content = (
    <div className="w-full flex flex-col items-center">
      <div className={`${isMobileScreen ? "w-[70%]" : "w-[90%]"} mt-[30px]`}>
        <h1 className="text-[#226E93] font-bold text-[30px]">
          About Thiagarajar College of Engineering
        </h1>
        <p className="mt-[10px]">
          Thiagarajar College of Engineering (TCE), Madurai, an autonomous
          institution affiliated to Anna University, is one among the several
          educational and philanthropic institutions founded by the
          philanthropist and industrialist Late. Shri. Karumuttu Thiagarajan
          Chettiar. <br />
          • TCE was established in the year 1957. <br />• TCE is funded by
          Central and State governments and the Management. <br />
          • The Programmes in TCE were approved by AICTE and granted autonomy in
          1987. <br />• TCE offers 9 UG programmes, 10 PG programmes, and 5
          years integrated M.Sc Data Science
        </p>
      </div>
      <div className={`${isMobileScreen ? "w-[70%]" : "w-[90%]"} mt-[30px]`}>
        <h1 className="font-bold text-[20px]">About the Department</h1>
        <p className="mt-[10px]">
          The FIST Supported Computer Science and Engineering Department was
          established in the year 1984. The theme area of the department is
          Knowledge Engineering. The Vision of the department is “Excellence in
          Computer Science and Engineering education and research”. The UG
          programme BE(CSE) is accredited for 6 years by NBA. <br />
          • The Department offers well-defined and unique curriculum broadly
          covering Theoretical Computer Science, Systems and Technology. <br />
          • It has laboratories supported by Microsoft, INTEL, TCS and HP.{" "}
          <br />
          • It is a recognized Research Center affiliated to Anna University and
          QIP Center offering Part-time and Full-time Ph.D Programme. <br />
          • Faculty members of the department specialize in the research groups
          such as AI & Data Science, Systems Engineering & High Performance
          Computing, Software Data Engineering and Network & Security with
          quality publications in IEEE, Elsevier, Wiley, Taylor & Francis etc.{" "}
          <br />
          • It has the privilege of having completed many R&D projects from RCI,
          AICTE, UGC, DIT, DST, Honeywell Technology Solutions and Linked-In.{" "}
          <br />
          • It was a consortium partner of CDBR Smart and Secure Environment
          project sponsored by NTRO, New Delhi. <br />
          • It has collaboration with EMC Data Storage Systems, VMware, Yahoo
          India, Unity Software and Red Hat. <br />• It is responsible for
          design and development of College Management Information System which
          has received many National Level Recognitions
        </p>
      </div>
      <div
        className={`${
          isMobileScreen ? "w-[70%]" : "w-[90%]"
        } mt-[30px] flex flex-col items-center mb-[20px]`}
      >
        <h1 className="font-bold text-2xl">Last Date for Registration</h1>
        <p className="font-bold text-3xl text-red-500">30 August 2024</p>
      </div>
    </div>
  );

  return (
    <div>
      <BackgroundComponent
        content={content}
        page={0}
        requiredMap={false}
        heading={heading}
        removeHeadingCSS={true}
      />
    </div>
  );
}

export default HomePage;
