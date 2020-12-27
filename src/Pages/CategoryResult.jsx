import React from "react";
import { Flex } from "@chakra-ui/react";
import { LayoutCategories } from "../Components/LayoutCategories";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../Services";
import { ProductCard } from "../Components/ProductCard";

export const CategoryResult = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = React.useState([]);
  console.log("dento", idCategory);

  React.useEffect(() => {
    const doFetchProducts = async () => {
      try {
        const prod = await getProductByCategory(idCategory);
        setProducts(prod.data.items);
      } catch (e) {
        setProducts([]);
      }
    };
    doFetchProducts();
  }, []);

  return (
    <LayoutCategories>
      <Flex flexWrap="wrap" justifyContent="center">
        {products.map((product, index) => {
          const data = {
            productImage: product.productElements.image.imgUrl,
            productTitle: product.productElements.title.title,
            productPrice: product.productElements.price.formatedAmount,
            productId: product.productId,
          };
          return <ProductCard key={index} product={data} />;
        })}
      </Flex>
    </LayoutCategories>
  );
};
