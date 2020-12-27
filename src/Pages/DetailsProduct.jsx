import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { LayoutCategories } from "../Components/LayoutCategories";
import { DetailProduct } from "../Components/DetailProduct";
import { getProductInfo } from "../Services";
import { useParams } from "react-router-dom";
import { SliderSection } from "../Components/SliderSection";

export const DetailsProduct = () => {
  const { idProduct } = useParams();
  const [detail, setDetail] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const doGetDetail = async () => {
      try {
        const det = await getProductInfo(idProduct);
        setDetail(det);
        setLoading(false);
      } catch (e) {
        setDetail({});
      }
    };
    doGetDetail();
  }, []);

  return (
    <LayoutCategories>
      <Flex flexDirection="column">
        <Flex justifyContent="center">
          <DetailProduct detail={detail} />
        </Flex>
        <Box mt="5rem">
          <SliderSection
            idCategory="200001648"
            tileSection="Blouses & Shirts"
          />
        </Box>
      </Flex>
    </LayoutCategories>
  );
};
