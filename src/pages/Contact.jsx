import BackgroundComponent from "../components/BackgroundComponent";
import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const isMobileScreen = useMediaQuery("(min-width: 590px)");

  const element = (
    <div className="w-full flex justify-center">
      <div
        className={`${
          isMobileScreen ? "w-[70%]" : "w-[90%]"
        } flex flex-col items-start mt-[50px]`}
      >
        <div className="flex flex-col items-start">
          <h1 className="underline">Workshop:</h1>
          <p>Dr. P. Karthikeyan - 9677973740</p>
          <p>Dr. A.M.Abirami - 9080524596</p>
        </div>
        <div className="flex flex-col items-start mt-[30px]">
          <h1 className="underline">Ideathon:</h1>
          <p>Dr.S.Karthiga - 8667261062</p>
          <p>Ms.C.V.Nisha Angeline - 9842175694</p>
        </div>
      </div>
    </div>
  );

  const heading = (
    <div>
      <h1 className={`${isMobileScreen ? "text-[90px]" : "text-[30px]"}`}>
        Contact
      </h1>
    </div>
  );

  return (
    <BackgroundComponent
      content={element}
      heading={heading}
      page={5}
      requiredMap={true}
      removeHeadingCSS={false}
    />
  );
};

export default Contact;
