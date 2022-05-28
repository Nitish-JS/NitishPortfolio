import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
import ProjectData from "./data/ProjectData";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";
export default function App() {
  return (
    <>
    <Typography variant="h3" sx={{color:"#edede8",textAlign:"center",pt:"5%"}} id="Projects">
      Projects
    </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        style={{margin:"10% 20%"}}
      >
        {ProjectData.map((data)=><SwiperSlide ><ProjectCard image={data.image} desc={data.desc}></ProjectCard></SwiperSlide>)}
      </Swiper>
    </>
  );
}
