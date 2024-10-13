import TempSection from "./Sections/TempSection.jsx"
import Section3 from "./Sections/Section3.jsx";
import Home from "./Sections/BannerSection.jsx"
import "./MainBody.css"
import Section2 from "./Sections/Section2.jsx";
import Section4 from "./Sections/Section4.jsx";

function MainBody() {
  return (
    <div className="MainBody">
      <Home></Home>
      <TempSection></TempSection>
      <TempSection></TempSection>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <TempSection></TempSection>
    </div>
  );
}

export default MainBody
