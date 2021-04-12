import { useState } from "react";
import React from "react";
import { AiFillSchedule } from 'react-icons/ai';

export default function LoginForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Name", name);
    localStorage.setItem("Surname", surname);
    window.location.assign("/Welcome");
  };
  return (
    <div className="container login">
      <div className='icon'>
      <AiFillSchedule size='80px'></AiFillSchedule>
      </div>
      
      <form onSubmit={handlesubmit} className="col s12">
        <div className="row">
          <div class="input-field col s6">
            <input
              onChange={(e) => setName(e.target.value)}
              color="black"
              id="first_name"
              type="text"
              class="validate"
              required
            />
            <label className="label" for="first_name">
              <h5>First Name</h5>
            </label>
          </div>
          <div class="input-field col s6">
            <input
              onChange={(e) => setSurname(e.target.value)}
              id="last_name"
              type="text"
              class="validate "
              required
            />
            <label className="label" for="last_name">
              <h5>Last Name</h5>
            </label>
          </div>
        </div>
        <br></br>
        <div className="container logbtn">
          <input
            value="Login"
            type="submit"
            class="waves-effect waves-light btn orange darken-4"
          />
        </div>
      </form>
    </div>
  );
}
