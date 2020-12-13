import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { SideBar } from "./SideBar";

export const LayoutCategories = ({ children }) => {
  return (
    <Flex>
      <SideBar categories={[]} />
      <Box p="1rem">{children}</Box>
    </Flex>
  );
};
