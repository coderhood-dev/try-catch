import React from "react";
import {
  Flex,
  Button,
  Input,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaCartPlus, FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <Flex
      minH="2.5rem"
      direction="row"
      justify="space-between"
      align="center"
      p="1rem 4rem"
      bg="#6748BC"
      bgColor="black"
    >
      <Heading width="25%" size="lg" color="white">
        Try-catch
      </Heading>
      <Flex width="50%">
        <Input
          placeholder="Search products"
          size="lg"
          bg="white"
          borderRadius="0rem"
        />
        <IconButton
          height="100"
          color="#dbdbdb"
          borderLeft="1px solid #dbdbdb"
          bgColor="white"
          borderRadius="0rem"
          colorScheme="blue"
          icon={<Search2Icon color="black" />}
        />
      </Flex>
      <Flex ml="2rem" width="25%" align="center" justifyContent="space-around">
        <Icon as={FaUser} fontSize="1.6rem" color="white" />
        <Icon as={FaCartPlus} fontSize="1.6rem" color="white" />
      </Flex>
      <Button colorScheme="black" variant="ghost"></Button>
    </Flex>
  );
}
