import React, { useState } from "react";
import Footer from "./Footer";
import InputItem from "./InputItem";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

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
        <Footer />
      </body>
    </main>
  );
}

export default App;
