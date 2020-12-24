import { Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <Flex
      minW="12rem"
      w="20%"
      h="100%"
      bgColor="#1a202c"
      boxShadow="xs"
      direction="column"
      overflowY="hidden"
      overflowX="hidden"
    >
      <Flex h="5%" w="100%" align="center">
        <Heading size="lg" ml="0.8rem" color="#6ccacf">
          Categories
        </Heading>
      </Flex>
      <Flex direction="column" h="95%">
        {categories.map((category) => (
          <Flex
            key={category.id}
            w="100%"
            h="10%"
            align="center"
            _hover={{
              fontWeight: "bold",
              boxShadow: "xs",
            }}
          >
            <Link to={`/category/${category.id}`}>
              <Text
                ml="0.8rem"
                color=" #a0aec0"
                _hover={{
                  color: "#6ccacf",
                  cursor: "pointer",
                }}
              >
                {category.name}
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
