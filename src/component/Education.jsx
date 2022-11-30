import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function Education() {
  return (
    <>
      <Typography variant="h3" sx={{ color: "#edede8", textAlign: "center",pt:"5%" }} id="Experience">
        Education
      </Typography>
      <Timeline position="alternate" >
        <TimelineItem>
          <TimelineSeparator >
            <TimelineDot sx={{background:"hsla(41, 100%, 50%, 0.89)"}}/>
            <TimelineConnector sx={{background:"hsla(41, 100%, 50%, 0.89)"}} />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", ml: "10%" }}>
              <Typography variant="h6">B.Tech CSE</Typography>
              <Typography>VIT University,</Typography>
              <Typography>Vellore.</Typography>
              <Typography>CGPA: 9.19</Typography>
              <Typography><CalendarMonthIcon /> 2020-2024</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{background:"hsla(41, 100%, 50%, 0.89)"}} />
            <TimelineConnector sx={{background:"hsla(41, 100%, 50%, 0.89)"}}   />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", mr: "10%" }}>
              <Typography variant="h6">12th Grade</Typography>
              <Typography>AVM Rajeshwari,</Typography>
              <Typography>Higher Secondary school,Chennai.</Typography>
              <Typography>Percentage: 91.67%</Typography>
              <Typography> <CalendarMonthIcon /> 2019-2020</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot  sx={{background:"hsla(41, 100%, 50%, 0.89)"}} />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", ml: "10%" }}>
              <Typography variant="h6">10th Grade</Typography>
              <Typography>AVM Rajeshwari,</Typography>
              <Typography>Higher Secondary school,Chennai.</Typography>
              <Typography>Percentage: 93.4%</Typography>
              <Typography><CalendarMonthIcon /> 2017-2018</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
