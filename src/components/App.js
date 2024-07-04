import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [ison, setOn] = useState(false);

 
  function ChangeTheme() {
    setOn(!ison);
  }

 
  const appClass = ison ? 'App dark' : 'App light';

  return (
    <div className={appClass}>
     
      
       
   
      <header>
        <h2>Shopster</h2>
        <button onClick={ChangeTheme}>
         {ison ? 'Light' : ' Dark'} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
