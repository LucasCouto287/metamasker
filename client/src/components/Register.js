import React, { useState, useContext } from "react";
import StoreContext from "../context/StoreContext";
import { REGISTER } from "../constants/actions";
import axios from "axios";

function Register({ onSubmit }) {
  const {
    state: { loggedIn },
    dispatch
  } = useContext(StoreContext);

  const [fields, setFields] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });

  const register = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/register", {
        displayName: fields.fName + " " + fields.lName,
        email: fields.email,
        password: fields.password
      })
      .then(() => {
        dispatch({ type: REGISTER });
        onSubmit();
      });
  };

  return (
    <div className="register">
      <form onSubmit={e => register(e)} className="registerFields">
        <div className="inputBox dark">
          First Name
          <input
            className="hasColorBlack"
            type="text"
            value={fields.fName}
            onChange={e =>
              setFields({ ...fields, ...{ fName: e.target.value } })
            }
          />
          <hr />
        </div>
        <div className="inputBox dark">
          Last Name
          <input
            className="hasColorBlack"
            type="text"
            value={fields.lName}
            onChange={e =>
              setFields({ ...fields, ...{ lName: e.target.value } })
            }
          />
          <hr />
        </div>
        <div className="inputBox dark">
          Email
          <input
            className="hasColorBlack"
            type="text"
            value={fields.email}
            onChange={e =>
              setFields({ ...fields, ...{ email: e.target.value } })
            }
          />
          <hr />
        </div>
        <div className="inputBox dark">
          Password
          <input
            className="hasColorBlack"
            type="password"
            value={fields.password}
            onChange={e =>
              setFields({ ...fields, ...{ password: e.target.value } })
            }
          />
          <hr />
        </div>
        <button className="loginButton dark" type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Register;
