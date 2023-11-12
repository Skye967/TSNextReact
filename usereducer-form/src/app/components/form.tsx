"use client";

import React, { useReducer } from "react";
import { validator, Action } from "../util/validator";


type State = {
  firstName: {
    value: string;
    error: string;
  };
  lastName: {
    value: string;
    error: string;
  };
  email: {
    value: string;
    error: string;
  };
};


const emptyState: State = {
  firstName: {
    value: "",
    error: "",
  },
  lastName: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
};

function reducer(state: State, action: Action) {
  const data = validator(action);
  return {
    ...state,
    [action.type]: data,
  };
}

function Form() {
  const [state, dispatch] = useReducer(reducer, emptyState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name: Action["type"] = e.target.name as Action["type"];
    const value: string = e.target.value;
    dispatch({
      type: name,
      payload: value,
    });
    console.log(state);
  }

  return (
    <div>
      <div>
        <label>
          <span>First Name:</span>
          {state.firstName.error && <p>{state.firstName.error}</p>}
          <input
            name="firstName"
            value={state.firstName.value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Last Name:</span>
          {state.lastName.error && <p>{state.lastName.error}</p>}
          <input
            name="lastName"
            value={state.lastName.value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Email:</span>
          {state.email.error && <p>{state.email.error}</p>}
          <input
            name="email"
            value={state.email.value}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default Form;
