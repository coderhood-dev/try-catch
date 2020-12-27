import React from "react";
import { SideBar } from "./SideBar";
import { getCategories } from "../Services";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LayoutCategories = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  const [actived, setActived] = React.useState(null);
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
      <Flex w="15rem" minW="15rem" direction="column" p="1rem">
        <Heading as="h4" size="md" mt="4rem" mb="1rem" fontSize="1.5rem">
          Categories
        </Heading>
        <Flex direction="column">
          {categories.map((category) => (
            <Box
              key={category.id}
              w="100%"
              cursor="pointer"
              pb="0.3rem"
              onClick={() => setActived(category.id)}
            >
              <Link to={`/category/${category.id}`}>
                <Text
                  ml="1rem"
                  _hover={{ color: "tomato", fontWeight: "bold" }}
                  style={
                    actived === category.id
                      ? {
                          color: "tomato",
                          fontWeight: "bold",
                        }
                      : null
                  }
                >
                  {category.name}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Box p="1rem">{children}</Box>
    </Flex>
  );
};
