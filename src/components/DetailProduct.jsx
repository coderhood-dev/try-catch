import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../Images/logo.png";
import { Flex,Box } from "@chakra-ui/react"
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
    testimonial: "lore lafd,amet consectu er",
  },
  {
    id: 2,
    username: "dennis",
    testimonial: "lore lafd,amet consectu er",
  },
  {
    id: 3,
    username: "shadrack",
    testimonial: "lore lafd,amet consectu er",
  },
  {
    id: 4,
    username: "shadrack",
    testimonial: "lore lafd,amet consectu er",
  },
  {
    id: 5,
    username: "shadrack",
    testimonial: "lore lafd,amet consectu er",
  },
  {
    id: 6,
    username: "shadrack",
    testimonial: "lore lafd,amet consectu er",
  },
];

export const DetailProduct =()=> {
  return (
    <Flex>
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
            <Box>
              {user.testimonial}
              <img src={logo} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
