import React from "react";
import { SideBar } from "./SideBar";

export const LayoutCategories = ({ children }) => {
  return (
    <div>
      <SideBar categories={[]} />
      <div>{children}</div>
    </div>
  );
};
