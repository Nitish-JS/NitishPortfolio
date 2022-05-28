import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Aboutme from "./component/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./component/Skills";
import Education from "./component/Education";
import Projects from "./component/Projects";
import ContactUs from "./component/Contactme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./component/Footer";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Aboutme />
        <Skill />
        <Education />
        <Projects />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
