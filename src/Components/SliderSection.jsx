import React from "react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import styled from "@emotion/styled";
import { getProductByCategory } from "../Services";
import { ProductCard } from "./ProductCard";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export const SliderSection = ({ idCategory, tileSection }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const doGetCategoryProducts = async () => {
      try {
        console.log("idCategory", idCategory);
        const prod = await getProductByCategory(idCategory);
        console.log("prod", prod);
        if (prod.code !== 200) {
          setProducts([]);
          setLoading(false);
          return;
        }
        setProducts(prod.data.items);
        setLoading(false);
      } catch (e) {
        setProducts([]);
      }
    };
    doGetCategoryProducts();
  }, []);

  return (
    <Flex flexDirection="column">
      <Title>{tileSection}</Title>
      <Box>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          slidesPerView={4}
          tag="section"
          wrapperTag="ul"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onInit={(swiper) => console.log(swiper)}
          onSwiper={() => setThumbsSwiper()}
          onSlideChange={(swiper) => console.log("slide change")}
          style={{ width: "100%", maxWidth: "72rem" }}
        >
          {products.map((product, index) => {
            const data = {
              productImage: product.productElements.image.imgUrl,
              productTitle: product.productElements.title.title,
              productPrice:
                product.productElements.price.sell_price.formatedAmount,
              productId: product.productId,
            };
            return (
              <SwiperSlide key={index} tag="li" style={{ maxWidth: "15rem" }}>
                <ProductCard product={data} />
              </SwiperSlide>
            );
          })}

          <ButtonPrev className="swiper-button-prev"></ButtonPrev>
          <ButtonNext className="swiper-button-next"></ButtonNext>
        </Swiper>
      </Box>
    </Flex>
  );
};

const ButtonPrev = styled(Box)`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: #fff;
  left: 1.1rem;
  &::after {
    font-size: 1.2rem;
  }
`;

const ButtonNext = styled(Box)`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: #fff;
  right: 1.1rem;
  &::after {
    font-size: 1.2rem;
  }
`;

const Title = styled(Heading)`
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #6ccacf;
`;
