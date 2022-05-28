import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from "@mui/material";
const ProjectCard = (props) => {
  const { image, desc } = props;
  return (
        <Box sx={{display:"flex" ,flexDirection:{xs:"column",sm:"row"},justifyContent:"space-evenly",alignContent:"center",p:"2%"}}>
          <Box >
            <img src={image} width="320px" height="240px"></img>
          </Box>
          <Box>
            <Typography variant='subtitle1' sx={{color:"#edede8",textAlign:"center"}}>
              {desc}
            </Typography>
          </Box>
        </Box>
      

  );
};

export default ProjectCard;
