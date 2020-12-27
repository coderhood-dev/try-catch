import React from "react";
import {
  Flex,
  Button,
  IconButton,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      minH="2.5rem"
      justify="space-between"
      p="1rem 4rem"
      bg="#6748BC"
      bgColor="black"
    >
      <Box w="10rem">
        <Link to="/">
          <Heading size="lg" color="tomato">
            Try catch
          </Heading>
        </Link>
      </Box>
      <InputGroup w="30rem" bg="#fafafa" borderRadius="0.5rem">
        <Input placeholder="Search products" />
        <InputRightElement
          children={
            <IconButton
              bg="tomato"
              borderRadius="0 0.4rem 0.4rem 0"
              aria-label="Search database"
              icon={<SearchIcon color="#000" />}
              fontSize="1.6rem"
              color="white"
            />
          }
        />
      </InputGroup>
      <IconButton
        bg="#000"
        _hover={{ background: "tomato" }}
        aria-label="Search database"
        icon={<Icon as={FaCartPlus} fontSize="1.6rem" color="white" />}
      />
    </Flex>
  );
};
