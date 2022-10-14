import { useState } from "react";
import React from "react";
import { addTodo } from "./redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  // const data = [
  //   {
  //     id: 1,
  //     title: "todo1",
  //     complete: true,
  //   },
  //   {
  //     id: 2,
  //     title: "todo2",
  //     complete: false,
  //   },
  //   {
  //     id: 3,
  //     title: "todo3",
  //     complete: true,
  //   },
  //   {
  //     id: 4,
  //     title: "todo4",
  //     complete: true,
  //   },
  // ];
  const [title, setTitle] = useState("");
  const [todoi, settodo] = useState();

  var dispatch = useDispatch();
  var todosFromred = useSelector((state) => state.addTodoRed);
  // console.log("todosFromred", todosFromred);

  const [addtodocomplete, setaddtodocomplete] = useState(false);

  function handleaddTodoComplete() {
    setaddtodocomplete(!addtodocomplete);
  }
  function handleAdd(e) {
    if (title !== "") {
      var addedData = {
        title: title,
        complete: addtodocomplete,
      };
      dispatch(addTodo(addedData));
      setTitle("");
    } else {
      alert("add title");
    }
  }
  function handleComplete(e, idx) {
    var updateTodo = [...todosFromred];
    todosFromred.forEach((element, ind) => {
      if (idx === ind) {
        updateTodo[ind].complete = !updateTodo[ind].complete;
      }
    });
    settodo(updateTodo);
  }
  return (
    <div className="App">
      <input onChange={(e) => setTitle(e.target.value)}></input>
      <input
        type="checkbox"
        value={addtodocomplete}
        checked={addtodocomplete}
        onChange={handleaddTodoComplete}
      ></input>
      <button onClick={handleAdd}>Add</button>
      {todosFromred?.length ? (
        <div>
          {todosFromred.map((todo, idx) => {
            return (
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  value={todo.complete}
                  checked={todo.complete}
                  onChange={(e) => handleComplete(e, idx)}
                ></input>
                <h4>{todo.title}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No todos</div>
      )}
    </div>
  );
}

export default App;
