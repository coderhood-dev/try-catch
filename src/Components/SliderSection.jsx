import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image,Center,Flex } from "@chakra-ui/react";
import "swiper/swiper.scss";
import logo from "../Images/logo.png";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

export const SliderSection=()=> {
  return (
    <Flex width="100vh" align="center" justify="center" display="block" margin="auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log("slide change")}
      >
        {data.map((user) => (
          <SwiperSlide key={user.id}>
            <Box mr="2rem" ml="2rem" textAlign="center">
              {user.testimonial}
              <img width="100%" height="100%"
              src={logo} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}

