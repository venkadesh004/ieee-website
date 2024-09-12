import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

function Schedule() {
  const brochure = "/brochure.pdf";
  const agenda = "/agenda.pdf";

  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const element = (
    <div className="w-full flex justify-center mt-[50px]">
      <div className={`${isMobileScreen ? "w-[75%]" : "w-[90%]"}`}>
        <h1 className="font-bold mb-2 text-2xl">Downlod the Event Brochure</h1>
        <iframe src={brochure} title="Schedule" className="w-full h-[500px]">
          Presss me: <a href={brochure}>Download Brochure</a>
        </iframe>
        <h1 className="font-bold mt-5 mb-2 text-2xl">Downlod the Event Agenda</h1>
        <iframe src={agenda} title="Schedule" className="w-full h-[500px] mb-5">
          Presss me: <a href={agenda}>Download Agenda</a>
        </iframe>
      </div>
    </div>
  );

  const heading = (
    <div>
      <h1 className={`${isMobileScreen ? "text-[90px]" : "text-[30px]"}`}>Event Schedule</h1>
    </div>
  );

  return (
    <BackgroundComponent
      page={2}
      heading={heading}
      content={element}
      requiredMap={false}
      removeHeadingCSS={false}
    />
  );
}

export default Schedule;
