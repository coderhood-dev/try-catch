import React from "react";

export const SideBar = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}

        <li>Elemento 2</li>
        <li>Elemento N</li>
      </ul>
    </div>
  );
};
