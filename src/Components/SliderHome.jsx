import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Center } from "@chakra-ui/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

const data = [
  {
    src: "./uno.jpg",
  },
  {
    src: "./dos.jpg",
  },
  {
    src: "./tres.jpg",
  },
];

export const SliderHome = () => {
  return (
    <Box w="100%" overflow="hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        overflow="hidden"
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log("slide change")}
      >
        {data.map((data) => (
          <SwiperSlide>
            <Center
              //h="50vh"
              w="100%"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                h="26rem"
                w="100%"
                src={data.src}
                objectFit="cover"
                display="block"
                margin="auto"
              />
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
