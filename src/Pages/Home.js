import React from "react";
import { SliderHome } from "../Components/SliderHome";
import { LayoutCategories } from "../Components/LayoutCategories";
import { SliderSection } from "../Components/SliderSection";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div>
      <div>
        <SliderHome />
      </div>
      <LayoutCategories>
        <SliderSection idCategory="200003482" tileSection="Dresses" />
        <SliderSection idCategory="200001648" tileSection="Blouses & Shirts" />
        <SliderSection
          idCategory="100003141"
          tileSection="Hoodies & Sweatshirts"
        />
      </LayoutCategories>
    </div>
  );
};
