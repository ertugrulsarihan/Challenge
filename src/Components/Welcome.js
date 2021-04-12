import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

export default function Welcome() {
  const [todos, setTodos] = useState([]);
  const [back, setBack] = useState([]);
  const [title, setTitle] = useState("");

  let name = localStorage.getItem("Name");
  let surname = localStorage.getItem("Surname");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos(
      todos.concat({
        title: title,
        id: uuidv4(),
      })
    );
    console.log(todos);

    setBack(todos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((k) => k.id !== id);
    setTodos(newTodos);
    setBack(newTodos);
  };

  const categoryFilter = (id) => {
    const filteredTodos = todos.filter((k) => k.id === id);
    setTodos(filteredTodos);
  };
  const getBackCategory = () => {
    setTodos(back);
  };

  return (
    <div>
      <div className="navbar row">
        <i className="fa fa-user fa-3x"></i>
        <h5>
          Welcome {name} {surname}
        </h5>
      </div>
      <div className="row container-fluid category">
        <button className="btn btn-outline-dark" onClick={getBackCategory}>
         Show All
        </button>
        {todos.map((k) => (
          <div key={k.id}>
            <button
              onClick={() => {
                categoryFilter(k.id);
              }}
              className="btn btn-warning"
            >
              {k.title}
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="container">
          <div className="card col-12">
            <div className="card-head">
              <h5 className="card-title">New Project</h5>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Create New Project"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    onClick={addTodo}
                    className="btn btn-primary"
                    type="button"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "25px" }} className="container cards row">
          {todos.map((todo) => (
            <div key={todo.id} className="card  col-12 col-md-6 ">
              <div className="card-head">
                <h5 className="card-title">{todo.title}</h5>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="btn btn-danger delete"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>

              <div className="card-body">
                <Card />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
