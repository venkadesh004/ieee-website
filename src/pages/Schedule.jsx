import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

function Schedule() {
  const path = "/document.pdf";

  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const element = (
    <div className="w-full flex justify-center mt-[50px]">
      <div className={`${isMobileScreen ? "w-[75%]" : "w-[90%]"}`}>
        <iframe src={path} title="Schedule" className="w-full h-[500px]">
          Presss me: <a href={path}>Download PDF</a>
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
