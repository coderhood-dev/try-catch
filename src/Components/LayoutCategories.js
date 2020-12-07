import React from "react";
import { Categories } from "./Categories";

export const LayoutCategories = ({ children }) => {
  return (
    <div>
      <Categories categories={[]} />
      <div>{children}</div>
    </div>
  );
};
