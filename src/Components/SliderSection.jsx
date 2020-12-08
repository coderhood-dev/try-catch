import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import logo from "../Images/logo.jpg";
import { ProductCard } from "./ProductCard";
import { Flex, Box } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

export const SliderSection = () => {
  return (
    <Flex
      width="50%"
      align="center"
      justify="center"
      display="block"
      margin="auto"
    >
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
              <ProductCard />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
