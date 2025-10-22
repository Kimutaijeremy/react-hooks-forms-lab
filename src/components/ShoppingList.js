import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");

  const displayedItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <Filter search={search} onSearchChange={setSearch} />
      <ul className="Items">
        {displayedItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <em>{item.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
