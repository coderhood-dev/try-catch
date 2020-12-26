import React from "react";
import { Flex } from "@chakra-ui/react";
import { LayoutCategories } from "../Components/LayoutCategories";
import { DetailProduct } from "../Components/DetailProduct";
import { getProductInfo } from "../Services";
import { useParams } from "react-router-dom";

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
      <Flex>
        <DetailProduct detail={detail} />
      </Flex>
    </LayoutCategories>
  );
};
