
import React, { useState } from "react";
import { items as itemData } from "../data/items";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
