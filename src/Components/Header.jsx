import React from "react";
import { Flex, Button, Input, IconButton, Heading,Text,Square,Box,Center } from "@chakra-ui/react";
import { Search2Icon} from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react"
// import { MdSettings } from "react-icons/md"
import { FaCartPlus,FaUser } from 'react-icons/fa';


export default function Header() {
  return (
    <Flex
    minH="2.5rem"
    direction="row"
    justify="space-between"
    align="center"
    p="1rem 4rem"
    bg="#6748BC"
  >
    <Heading width="25%" size="lg">Try-catch</Heading>
    <Flex width="50%">
      <Input
        // marginRight="1rem"
        placeholder="Search products"
        size="lg"
        bg="white"
        borderRadius="0rem"
      />
      <IconButton
        // marginRight="4rem"
      //   position="relative"
        height="100"
        borderRadius="0rem"
        colorScheme="blue"
        icon={<Search2Icon />}
      />
    </Flex>
    <Flex ml="2rem" width="25%" align="center" justifyContent="space-around">
    <Icon as={FaUser} fontSize="1.6rem"/>
    <Icon as={FaCartPlus} fontSize="1.6rem" />
    </Flex>
   <Button colorScheme="black" variant="ghost"></Button>
  </Flex>
  );
}
