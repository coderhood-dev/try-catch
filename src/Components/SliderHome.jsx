import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image,Center } from "@chakra-ui/react";
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

export const SliderHome = () => {
  return (
    <Box width="100%"  height="60vh" overflow="hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        overflow="hidden"
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log("slide change")}
      >
        {data.map((user) => (
          <SwiperSlide>
            <Center
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image src={promo}
              // position="absolute"
              width="100%"
              height="30rem"
              objectFit="full"
              display="block"
              margin="auto"
              />
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}