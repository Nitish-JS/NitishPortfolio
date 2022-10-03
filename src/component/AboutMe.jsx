import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import Img from "../images/Image.jpeg";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Resume from "./data/Nitish Resume.pdf";
const Aboutme = () => {
  return (
    <Container id="About" sx={{ pt: { xs: "15%", md: "10%" } }}>
      <Typography variant="h3" sx={{ textAlign: "center", color: "#edede8" }}>
        About me
      </Typography>
      <Box
        sx={{
          margin: [, , "5% 10%"],
          color: "#edede8",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column ", md: "row" },
        }}
      >
        <Box sx={{ mt: { xs: "5%", md: "0" }, textAlign: { xs: "center" } }}>
          <img src={Img} className="img"></img>
        </Box>
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            mt: { xs: "5%", md: "0" },
            ml: { md: "10%" },
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "20px" }}>
            I am Nitish J S, a pre-final year student at VIT, Vellore-majoring in Computer
            Science and Engineering. I am a vivid learner with unquenchable
            enthusiasm to learn and explore. I'm currently exploring full-stack
            Web development using the MERN stack. 
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "20px" }}>
          I have extensive knowledge of
            multiple programming languages, excellent problem-solving skills,
            and the ability to perform well in teams.
          </Typography>
          <Button
            endIcon={<FileCopyIcon />}
            sx={{
              backgroundColor: "hsla(41, 100%, 50%, 0.89)",
              color: "#edede8",
              p: "3%",
              mt: "5%",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              download="Nitish Resume"
              href={Resume}
            >
              My Resume
            </a>
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ textAlign: "center" ,m:"5%"}}>
        <Button
          endIcon={<FileCopyIcon />}
          sx={{
            backgroundColor: "hsla(41, 100%, 50%, 0.89)",
            color: "#edede8",
            p: "2%",
            
          }}
        >
          <a style={{textDecoration:"none" ,color:"inherit"}} download="Nitish Resume" href={Resume} >
            My Resume
          </a>
        </Button>
      </Box> */}
    </Container>
  );
};

export default Aboutme;
