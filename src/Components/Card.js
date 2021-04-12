import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Card(props) {
  const [lists, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const removeTodo = (id) => {
    const newTodos = lists.filter((k) => k.id !== id);
    setList(newTodos);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={props.content}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="input-group-append">
          <button
            onClick={() => {
              setList(
                lists.concat({
                  content: todo,
                  id: uuidv4(),
                })
              );
            }}
            className="btn btn-success"
            type="button"
          >
            Add
          </button>
        </div>
      </div>

      {lists.map((l) => (
        <div key={l.id} className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <input
          type='text'
            className="form-control"
            aria-label="Text input with checkbox"
            value={l.content}
            onChange={(e) => (l.content = e.target.value)}
          />
          <button onClick={() => removeTodo(l.id)} className="btn bt-danger">
            <i className="fas fa-trash"></i>
          </button>
          <div class="switch">
            <label>
              <input type="checkbox" />
              <span class="lever"></span>
              Done
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
