import { Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <Flex w="15rem" minW="15rem" h="100vh" direction="column" boxShadow="xl">
      <Flex
        h="10%"
        w="100%"
        justify="flex-start"
        align="center"
        boxShadow="base"
      >
        <Heading ml="1rem">Categories</Heading>
      </Flex>
      <Flex direction="column" h="90%">
        {categories.map((category) => (
          <Flex
            key={category.id}
            w="100%"
            h="10%"
            align="center"
            _hover={{ fontWeight: "bold", boxShadow: "base" }}
          >
            <Link to={`/category/${category.id}`}>
              <Text ml="1rem" _hover={{ color: "tomato", cursor: "pointer" }}>
                {category.name}
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
