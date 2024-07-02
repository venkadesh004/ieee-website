import BackgroundComponent from "../components/BackgroundComponent";

const Contact = () => {
  const element = (
    <div>
      <div className="flex flex-col items-start">
        <h1>Summer School:</h1>
        <p>Dr. P. Karthikeyan - 9677973740</p>
        <p>Dr. A.M.Abirami - 9080524596</p>
      </div>
      <div className="flex flex-col items-start">
        <h1>Hackathon:</h1>
        <p>Dr.S.Karthiga - 8667261062</p>
        <p>Ms.C.V.Nisha Angeline - 9842175694</p>
      </div>
    </div>
  );

  return <BackgroundComponent content={element} heading={"Contact"} page={5} requiredMap={true} removeHeadingCSS={false} />;
};

export default Contact;
