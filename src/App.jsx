import './App.css'
import SideNav from './SideNav.jsx'
import MainBody from './MainBody.jsx'
function App() {

  // const sections = document.getElementsByClassName('.Section');
  // console.log(sections)
  // const scrollObserve = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if(entry.intersectionRatio > 0.5){
  //       console.log(sections)
  //     }
  //   })
  // });
  // scrollObserve.observe(sections);

  return (
    <>
    <SideNav/>
    <MainBody/>
    </>
  )
}

export default App
