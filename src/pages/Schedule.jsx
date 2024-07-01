import BackgroundComponent from "../components/BackgroundComponent";
import { Document, Page } from "react-pdf";

function Schedule() {
  const path = "/public/document.pdf";

  const element = (
    <div>
      <Document file={path}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );

  return (
    <BackgroundComponent
      page={2}
      heading={"Summer School Schedule"}
      content={element}
      requiredMap={false}
    />
  );
}

export default Schedule;
