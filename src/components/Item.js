import React, { useState } from "react";



 
function Item({ name, category }) {
  const [isadd, setadd] = useState(false);

 
  function ChangeTheme() {
    setadd(!isadd);
  }
  const appClass = isadd ? 'in-cart' : '';

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isadd ? 'remove' : 'add'} onClick={ChangeTheme}>{isadd ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
