import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import SendIcon from "@mui/icons-material/Send";
const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    var sucess = 1;
    await emailjs
      .sendForm(
        "service_8017jtc",
        "template_f3vrt46",
        form.current,
        "QkxWOZnNjUw9oZ-2D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          sucess = 0;
        }
      );
    if (sucess) {
      console.log("hello");
      alert("mail sent sucessfully");
      setValues([]);
    } else {
      alert("Something went wrong mail not send");
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "#edede8", pt: "5%" }}
        id="Contact"
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          width: "50%",
          margin: "5% auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          position: "relative",
          left: "2%",
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <TextField
              sx={{
                background: "#011835",
                borderRadius: "20px",
                width: { xs: "100%", md: "45%" },
              }}
              id="name"
              name="name"
              onChange={handleChange}
              value={values?.name}
              label="Name"
              variant="outlined"
              InputLabelProps={{ style: { color: "#edede8" } }}
              inputProps={{ style: { color: "#edede8" } }}
            ></TextField>
            <TextField
              sx={{
                background: "#011835",
                borderRadius: "20px",
                mt: { xs: "5%", md: "0" },
                width: { xs: "100%", md: "45%" },
              }}
              id="email"
              onChange={handleChange}
              value={values?.email}
              name="email"
              label="Email"
              variant="outlined"
              InputLabelProps={{ style: { color: "#edede8" } }}
              inputProps={{ style: { color: "#edede8" } }}
            ></TextField>
          </Box>
          <Box>
            <TextField
              id="subject"
              onChange={handleChange}
              value={values?.subject}
              sx={{
                background: "#011835",
                borderRadius: "20px",
                mt: "5%",
                width: "90%",
              }}
              name="subject"
              label="Subject"
              variant="outlined"
              InputLabelProps={{ style: { color: "#edede8" } }}
              inputProps={{ style: { color: "#edede8" } }}
            ></TextField>
          </Box>
          <Box>
            <TextField
              multiline
              rows={8}
              sx={{
                background: "#011835",
                borderRadius: "20px",
                mt: "5%",
                width: "90%",
              }}
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              InputLabelProps={{ style: { color: "#edede8" } }}
              inputProps={{ style: { color: "#edede8" } }}
              onChange={handleChange}
            ></TextField>
          </Box>

          <Button
            type="submit"
            endIcon={<SendIcon />}
            variant="contained"
            sx={{
              backgroundColor: "hsla(41, 100%, 50%, 0.89)",
              mt: "10%",
              padding: "3%",
              position: "relative",
              left: { xs: "10%", sm: "25%" },
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </>
  );
};
export default ContactUs;
