import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Flex } from "@chakra-ui/react";
import "../Styles/style.css";
import "swiper/swiper.scss";
import promo from "../Images/promo.jpg";
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
];

export default function SliderHome() {
  return (
    <Box w="100%" h="30%">
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
            <Flex
              h="100%"
              w="100%"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image h="43.75rem" w="100%" src={promo} />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
