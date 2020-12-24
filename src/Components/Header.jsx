import React from "react";
import {
  Flex,
  Button,
  Input,
  IconButton,
  Heading,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaCartPlus, FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <Flex
      height="4.5rem"
      w="100%"
      direction="row"
      align="center"
      bgColor="#1a202c"
    >
      <Flex width="25%" justify="center" align="center">
        <Heading size="lg" color="#6ccacf">
          Try catch
        </Heading>
      </Flex>
      <Flex
        width="50%"
        h="50%"
        bgColor="#2d3748"
        borderRadius="1rem"
        overflow="hidden"
      >
        <Input
          height="100%"
          variant="unstyled"
          placeholder="Search products"
          size="lg"
          bg="#2d3748"
          borderRadius="0rem"
        />
        <IconButton
          height="100%"
          color="#dbdbdb"
          bgColor="#2d3748"
          borderRadius="0rem"
          colorScheme="blue"
          icon={
            <Search2Icon
              color="
          #a0aec0"
            />
          }
        />
      </Flex>
      <Flex width="25%" justify="space-evenly">
        <Icon
          as={FaUser}
          fontSize="1.4rem"
          color="
          #a0aec0"
          _hover={{
            transition: "0.1s",
            transform: "scale(1.2)",
            cursor: "pointer",
          }}
        />
        <Icon
          as={FaCartPlus}
          fontSize="1.4rem"
          color="
          #a0aec0"
          _hover={{
            transition: "0.1s",
            transform: "scale(1.2)",
            cursor: "pointer",
          }}
        />
      </Flex>
    </Flex>
  );
};
