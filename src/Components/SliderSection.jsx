import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./ProductCard";
import { getProductByCategory } from "../Services";
import { Flex, Box, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const SliderSection = ({ titleSection, idCategory }) => {
  const [products, setProducts] = React.useState([]);
  console.log("hola")
  React.useEffect(() => {
    console.log("hola usefefect")
    const doGetCategoryProducts = async () => {
      try {
        const data = await getProductByCategory(idCategory);
        // console.log([data1.data.items, data2.data.items, data3.data.items])
        console.log(data)
        setProducts(data);
        
      } catch (e) {
        console.log(e);
        setProducts([]);
      }
    };
    doGetCategoryProducts();
  }, []);

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
        <Text>{titleSection}</Text>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={(swiper) => console.log("slide change")}
        >
          {["1","2","3","4","5"].map((product, index) => (
            <SwiperSlide key={index}>
              <Box mr="2rem" ml="2rem" textAlign="center">
                {/* <ProductCard key={index} data={product} /> */}
                {product}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
