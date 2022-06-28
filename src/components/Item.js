import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [Class, setClass] = useState(true);
function handleClick() {
  setClass((Class) => !Class);
}
  
  const appClass = Class ? "" : "in-cart"

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add"> {Class ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
