import TempSection from "./Sections/TempSection.jsx"
import Section3 from "./Sections/Section3.jsx";
import Home from "./Sections/BannerSection.jsx"
import "./MainBody.css"

function MainBody() {
  return (
    <div className="MainBody">
      <Home></Home>
      <TempSection></TempSection>
      <TempSection></TempSection>
      <Section3></Section3>
      <TempSection></TempSection>
    </div>
  );
}

export default MainBody
