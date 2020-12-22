import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { getCategories } from "../Services";

export const LayoutCategories = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const doGetCategories = async () => {
      try {
        const cate = await getCategories();
        if (cate.code !== 200) {
          setCategories([]);
          setLoading(false);
          return;
        }
        setCategories(cate.categories);
        setLoading(false);
      } catch (e) {
        setCategories([]);
      }
    };
    doGetCategories();
  }, []);

  return (
    <Flex>
      <SideBar categories={categories} />
      <Box p="1rem">{children}</Box>
    </Flex>
  );
};
