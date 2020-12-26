import React from "react";
import { Flex } from "@chakra-ui/react";
import { LayoutCategories } from "../Components/LayoutCategories";
import { DetailProduct } from "../Components/DetailProduct";
import { getProductDetails } from "../Services";
import { useParams } from "react-router-dom";

export const DetailsProduct = () => {
  const { idProduct } = useParams();
  const [detail, setDetail] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  console.log(idProduct);

  React.useEffect(() => {
    setLoading(true);
    const doGetDetail = async () => {
      try {
        console.log("idCategory", idProduct);
        const det = await getProductDetails(idProduct);
        console.log("prod", det);
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
