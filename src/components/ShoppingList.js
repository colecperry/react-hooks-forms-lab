import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSearch, setCurrentSearch] = useState("")
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  // This variable displays items based on category drop down list
  const itemsDisplayedByCategory = submittedData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  const onSearchChange = (event) => {
    setCurrentSearch(event.target.value);
    console.log(event.target.value)
  };

  // This variable displays items based on search
  const searchItems = itemsDisplayedByCategory.filter((item) =>
  item.name.toLowerCase().includes(currentSearch.toLowerCase())
  );


  // Function to grab new form name and set new state
  const handleNewName = (event) => {
  setNewName(event.target.value)
  console.log(event.target.value)
  };

  // Function to grab new category name and set new state

  const handleNewCategory = (event) => {
    setNewCategory(event.target.value)
    console.log(event.target.value)
    };

    // Function to create new array with new data from form

    const handleSubmit = (event) => {
      event.preventDefault();
      const newItem = {id: uuid(), name: newName, cate: newCategory};
      const dataArray = [...submittedData, newItem];
      setSubmittedData(dataArray);
      console.log(dataArray);
    }

  return (
    <div className="ShoppingList">
      <ItemForm handleNewCategory={handleNewCategory} handleNewName={handleNewName} newName={newName} newCategory={newCategory} handleSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} currentSearch={currentSearch}/>
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
