import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
const ProjectCard = (props) => {
  const { image, desc } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Box>
        <img src={image} width="320px" height="240px"></img>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: "#edede8", textAlign: "center" ,p:"5% 10%"}}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
