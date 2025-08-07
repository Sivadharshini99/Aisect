import React, { useState } from "react";
// import styled from "styled-components";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const TodoApp = () => {
  //new state-usestate
  let [items, setItems] = useState([
    { id: 1, label: "html", checked: true },
    { id: 2, label: "css", checked: true },
    { id: 3, label: "js", checked: false },
  ]);
  //data manage-input field--by react
  let [newItem, setNewItem] = useState("");
  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(newListItems);
  };
  //edit mode-button-manage
  let [isEditing, setIsEditing] = useState(false);
  let [currentEleID, setCurrentEleID] = useState(null);

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrentEleID(id);
  };
  //delete button
  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItems);
  };
  //add or save button
  let handleAddorSave = () => {
    if (isEditing) {
      let newListItems = items.map((item) => {
        return item.id === currentEleID ? { ...item, label: newItem } : item;
      });
      setItems(newListItems);
      setCurrentEleID(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };
  return (
    <main>
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }} // onchange event handler
        />
        <button onClick={handleAddorSave}>{isEditing ? "save" : "Add"}</button>{" "}
        {/* //edit mode */}
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleChecked(item.id);
                }}
              />
              <label>{item.label}</label>
              {/* <button>Delete</button> */}
              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashCan
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />{" "}
              {/* react icon  */}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default TodoApp;
