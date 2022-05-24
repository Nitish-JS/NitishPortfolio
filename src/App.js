import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Aboutme from "./component/AboutMe";
import { BrowserRouter } from "react-router-dom";
import Skill from "./component/Skills";
import Education from "./component/Education";
import Projects from "./component/Projects";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Aboutme />
      <Skill />
      <Education />
      {/* <Projects /> */}
    </BrowserRouter>
  );
}

export default App;
