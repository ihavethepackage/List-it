import React, { useEffect, useState } from "react";
import InputItem from "./InputItem";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  // loads and renders localstorage items when page loads
  useEffect(() => {
    const item = localStorage.getItem("todo", items);
    if (item) {
      setItems(JSON.parse(item));
    }
    // eslint-disable-next-line
  }, []);

  // sets to localstorage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  });

  function addItem(inputText) {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <main>
      <body>
        <div className="container">
          <div className="heading">
            <h1>ToDo List</h1>
          </div>
          <div className="inputItemArea">
            <InputItem onAdd={addItem} />
          </div>
          <div>
            <ul>
              {items.map((toDoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  onChecked={deleteItem}
                  text={toDoItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </body>
    </main>
  );
}

export default App;
