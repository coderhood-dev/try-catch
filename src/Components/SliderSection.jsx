import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import logo from "../Images/logo.jpg";
import { ProductCard } from "./ProductCard";
import { Flex, Box, Text } from "@chakra-ui/react";
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

export const SliderSection = ({ Products }) => {
  return (
    <Flex
      width="50%"
      h="100vh"
      align="center"
      justify="center"
      display="block"
      margin="auto"
      flexDirection="column"
    >
      <Flex>
        <Text>Dresses</Text>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => console.log("slide change")}
        >
          {data.map((Product) => (
            <SwiperSlide key={Product}>
              <Box mr="2rem" ml="2rem" textAlign="center">
                <ProductCard data={product.productElements} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex>
        <Text>Computers</Text>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => console.log("slide change")}
        >
          {data.map((Product) => (
            <SwiperSlide key={Product}>
              <Box mr="2rem" ml="2rem" textAlign="center">
              <CategoryResult 
                  idCategory={"200002342"}
              />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
