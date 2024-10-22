/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import SimpleBlend from "../assets/simple-header-blended-small.png";
import Maps from "../components/Maps";

const BackgroundComponent = ({
  heading,
  page,
  content,
  requiredMap,
  removeHeadingCSS,
}) => {
  sessionStorage.setItem("currentPage", page);

  const windowHeight = window.innerHeight - 50;
  const whiteHeight = window.innerHeight - 300;

  return (
    <div className="w-full h-screen overflow-y-hidden">
      <Navbar />
      <div className={`w-full relative`} style={{ height: windowHeight }}>
        <img
          src={SimpleBlend}
          alt=""
          className="w-full bg-[#226E93] absolute top-0 left-0 z-5 overflow-y-hidden"
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-y-scroll ">
          <div
            className={`${
              !removeHeadingCSS
                ? "w-ful top-0 left-0 text-white text-[90px] h-[300px] flex items-center justify-center font-bold"
                : "w-full top-0 left-0 h-[300px] flex items-center justify-center"
            }`}
          >
            {heading}
          </div>
          <div
            className={`w-full bg-white z-10 top-[300px] left-0 flex flex-col items-center`}
            style={{ minHeight: whiteHeight }}
          >
            <div className="flex flex-col items-start w-full">{content}</div>
            {requiredMap && (
              <div className="my-[50px]">
                <Maps width={window.innerWidth - 30} height={"500px"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
