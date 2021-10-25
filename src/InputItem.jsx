import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInput(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function handleAddButton() {
    if (inputText !== "") {
      props.onAdd(inputText);
      setInputText("");
    } else {
      alert("Please enter a 'To-Do' item.");
    }
  }

  return (
    <div>
      <input
        className="inputArea"
        type="text"
        onChange={handleInput}
        placeholder="What do I need to do ?"
        value={inputText}
      ></input>

      <button className="addToListButton" onClick={handleAddButton}>
        <span>Add to List</span>
      </button>
    </div>
  );
}

export default InputArea;
