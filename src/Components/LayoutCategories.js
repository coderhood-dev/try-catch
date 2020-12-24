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
    <Flex w="100%" h="200vh" bgColor="#1a202c">
      <SideBar categories={categories} />
      <Box pl="1rem" w="85vw" minW="55rem" h="100vh">
        {children}
      </Box>
    </Flex>
  );
};
