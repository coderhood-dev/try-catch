import React from "react";
import { LayoutCategories } from "../Components/LayoutCategories";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../Services";
import { ProductCard } from "../Components/ProductCard";

export const CategoryResult = () => {
  const { idCategory } = useParams();
  const [items, setProducts] = React.useState([]);

  React.useEffect(() => {
    const doFetchPosts = async () => {
      try {
        const data = await getProductByCategory(idCategory);
        setProducts(data);
      } catch (e) {
        setProducts([]);
      }
    };

    doFetchPosts();
  }, []);

  return (
    <LayoutCategories>
      {items.map((prod) => {
        const data = { productImage: prod.productElements.image.imgUrl };
        return <ProductCard data={data} />;
      })}
    </LayoutCategories>
  );
};
