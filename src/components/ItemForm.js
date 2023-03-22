import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleNewName, handleNewCategory, newName, newCategory, handleSubmit}) {
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName} value={newName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory} value={newCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
