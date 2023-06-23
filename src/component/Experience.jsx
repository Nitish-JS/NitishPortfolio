import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function Experience() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#edede8", textAlign: "center", pt: "5%" }}
        id="Experience"
      >
        Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign:{md: "justify"} }}>
              <Typography variant="h6">Full Stack Developer Intern</Typography>
              <Typography>
                Butternut AI, San Francisco (remote), 
                <CalendarMonthIcon />  May 2023 - Present
              </Typography>
              <Typography variant="caption">
                As a Full Stack Developer Intern at Butternut.ai, I have
                contributed to the development and deployment of multiple live
                features into production for their AI-powered website builder.
                Leveraging technologies like Next.js, Flask, and AWS, I played a
                vital role in enhancing the platform's functionalities
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign: "right" }}>
              <Typography variant="h6">Front End Developer Intern</Typography>
              <Typography>
                HighonSwift, Banglore (remote), <CalendarMonthIcon /> Mar 2023 -
                May 2023
              </Typography>
              <Box sx={{textAlign:{md: "justify"}}}>
              <Typography variant="caption">
                Successfully collaborated on two client projects during
                internship. Developed user interfaces for a Hospital Management
                System using React, enhancing UX and streamlining workflows.
                Created an Admin Panel for a university with interactive
                dashboards, dynamic forms, and tables for efficient data
                management. Implemented responsive design for optimal user
                experience across devices and integrated frontend components
                with backend systems using API endpoints.
              </Typography>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign:{md: "justify"} }}>
              <Typography variant="h6">Software Developer</Typography>
              <Typography>
                Riverbend Data Solutions, Hyderabad (remote),{" "}
                <CalendarMonthIcon /> Jun 2022 - Aug 2022
              </Typography>
              <Typography variant="caption">
                I was part of project titled "iclinic". This project was aimed
                to build a digital health care platform. As part of the project,
                I have worked on technologies and fields such as react native,
                JavaScript’s, frontend - backend development frameworks(MERN).
                Fabricating complete product development, system design and
                architecture.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
