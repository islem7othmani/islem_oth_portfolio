import './App.css';
import { About } from './Components/About';
import AssociativeWorks from './Components/AssociativeWorks';
import Education from './Components/Education';
import Experience from './Components/Experience';
import { Hero } from './Components/Hero';
import { NavBar } from './Components/NavBar';
import ProjectsSection from './Components/ProjectsSection';
import Contact from './Components/Contact';
function App() {
  return (
   <>
   <NavBar/>
<Hero/>
<About/>
<Experience/>
<Education/>
<ProjectsSection/>
<AssociativeWorks/>
<Contact/>
   </>
  );
}

export default App;
