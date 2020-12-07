import React from "react";
import { SliderHome } from "../Components/SliderHome";
import { LayoutCategories } from "../Components/LayoutCategories";

export const Home = () => {
  return (
    <div>
      <div>
        <SliderHome />
      </div>
      <LayoutCategories>
        <h1>Page Home</h1>
      </LayoutCategories>
    </div>
  );
};
