import React from "react";
import Typed from "typed.js";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { color } from "@mui/system";
import profilePic from "../images/firstPic.jpg";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css";
const Home = () => {
  const descRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(descRef.current, {
      strings: [
        "A CSE undergrad",
        "A Frontend Web Developer",
        "A Competitive Programmer",
        "A Backend Web Dev enthusiast",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container sx={{ mt: { xs: "10%", md: "15%" } }}>
      <Box
        sx={{
          margin: [, , "12.5% 10%"],
          color: "#edede8",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <h1>Hello, I'm</h1>
          <h1>Nitish</h1>
          <h3>
            I'm{" "}
            <span
              ref={descRef}
              style={{ color: "hsla(41, 100%, 50%, 0.89)" }}
            ></span>
          </h3>
          <Typography variant="h6">
            A self learner and tech enthusiast.
          </Typography>

          <Button
            endIcon={<SendIcon />}
            variant="contained"
            sx={{
              backgroundColor: "hsla(41, 100%, 50%, 0.89)",
              mt: "10%",
              padding: "3%",
            }}
          >
            Get in touch
          </Button>
        </Box>
        <Box sx={{ mt: { xs: "5%", md: "0" }, textAlign: { xs: "center" } }}>
          <img
            className="img"
            src={profilePic}
            // style={{ height: "300px", width: "300px", borderRadius: "50%", }}
          ></img>
        </Box>
        <Box
          sx={{
            pt: { xs: "5%", md: "0" },
            display: "flex",
            flexDirection: { md: "column" },
            alignItems: "center",
            justifyContent: "center",
            columnGap: "1rem",
            rowGap: "1rem",
            color: "hsla(41, 100%, 50%, 0.89)",
          }}
        >
          <Button color="inherit" href="https://www.linkedin.com/in/nitish-j-s">
            <LinkedInIcon />
          </Button>
          <Button color="inherit" href="mailto:jsnitish46@gmail.com">
            <EmailIcon />
          </Button>
          <Button href="https://github.com/Nitish-JS" sx={{ color: "inherit" }}>
            <GitHubIcon />
          </Button>
          <Button
            color="inherit"
            href="https://www.instagram.com/_n.i.t.i.s.hhhhh/"
          >
            <InstagramIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
