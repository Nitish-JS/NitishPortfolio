import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
const ProjectCard = (props) => {
  const { image, desc, link } = props;
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
        <a href={link}>
          <img src={image} width="320px" height="240px"></img>
        </a>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", padding: "10px 40px " }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#edede8", textAlign: "left" }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
