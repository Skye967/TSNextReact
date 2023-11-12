import React, { Component } from "react";
import { Validatable, validate } from "../util/Validation";


type State = {
  firstName: string;
  firstNameError: string;
  lastName: string;
  lastNameError: string;
  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  confirmPassword: string;
  confirmPasswordError: string;
};

class Form extends Component {
  public state: State = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  };

  private setInput = (e: HTMLInputElement): void => {
    switch (e.id) {
      case "firstName":
        this.state.firstName = e.value;
        const firstNameValidation: Validatable = {
          value: this.state.firstName,
          error: "",
          minLength: 2,
          maxLength: 10,
        };
        validate(firstNameValidation);
        this.setState(() => ({
          firstNameError: firstNameValidation.error,
        }));
        break;
      case "lastName":
        this.state.lastName = e.value;
        const lastNameValidation: Validatable = {
          value: this.state.lastName,
          error: "",
          minLength: 2,
          maxLength: 10,
        };
        validate(lastNameValidation);
        this.setState(() => ({
          lastNameError: lastNameValidation.error,
        }));
        break;
      case "email":
        this.state.email = e.value;
        const emailValidation: Validatable = {
          value: this.state.email,
          error: "",
          required: true,
          minLength: 2,
          maxLength: 10,
        };
        validate(emailValidation);
        this.setState(() => ({
          emailError: emailValidation.error,
        }));
        break;
      case "password":
        this.state.password = e.value;
        const passwordValidation: Validatable = {
          value: this.state.password,
          error: "",
          required: true,
          minLength: 8,
          maxLength: 15,
        };
        validate(passwordValidation);
        this.setState(() => ({
          passwordError: passwordValidation.error,
        }));
        break;
      case "confirmPassword":
        this.state.confirmPassword = e.value;
        const confirmPasswordValidation: Validatable = {
          value: this.state.confirmPassword,
          error: "",
          required: true,
          minLength: 8,
          maxLength: 15,
        };
        validate(confirmPasswordValidation);
            if (this.state.confirmPassword !== this.state.password) {
          this.setState(() => ({
            confirmPasswordError: 'Password and Confirm Password fields do not match!',
          }));
        }
        break;
    }
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <div>
              <label>First Name</label>
              <p>{this.state.firstNameError}</p>
              <input
                type="text"
                id="firstName"
                onChange={(e) => this.setInput(e.target)}
              ></input>
            </div>
            <div>
              <label>Last Name</label>
              <p>{this.state.lastNameError}</p>
              <input
                type="text"
                id="lastName"
                onChange={(e) => this.setInput(e.target)}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <p>{this.state.emailError}</p>
              <input
                type="email"
                id="email"
                onChange={(e) => this.setInput(e.target)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <p>{this.state.passwordError}</p>
              <input
                type="text"
                id="password"
                onChange={(e) => this.setInput(e.target)}
              ></input>
            </div>
            <div>
              <label>Confirm Password</label>
              <p>{this.state.confirmPasswordError}</p>
              <input
                type="text"
                id="confirmPassword"
                onChange={(e) => this.setInput(e.target)}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
