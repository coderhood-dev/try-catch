import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image,Flex } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/swiper.scss";
import logo from "../Images/logo.jpg"
import Bauto from "../Images/Bauto.png"
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

const data = [
  {
    id: 1,
    username: "shadrack",
  },
  {
    id: 2,
    username: "dennis",
  },
  {
    id: 3,
    username: "shadrack",
  },
];

export default function SliderHome () {
  return (
    <Box w="100%" h="50%">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        overflow="hidden"
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log("slide change")}
      >
        {data.map((user) => (
          <SwiperSlide>
            <Flex h="100%" w="100%" justifyContent='center' alignItems='center' overflow="hidden">
             <Image width="inherit" height="inherit" 
            //  width="1500px" 
            //  height="30rem" 
            // objectFit="cover"
            height="100%"
            width="100%"
             src={Bauto}/>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

