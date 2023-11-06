import { stat } from "fs";
import React, { Component } from "react";

type Props = {
  person: {
    name: string;
    age: number;
    hairColor: string;
  };
};

type State = {
  name: string;
  age: number;
  hairColor: string;
};

class Card extends Component<Props, State> {
  public state: State = {
    name: this.props.person.name,
    age: this.props.person.age,
    hairColor: this.props.person.hairColor,
  };

  birthdayButtonHandler = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>{this.state.age}</p>
        <p>{this.state.hairColor}</p>
        <button type="button" onClick={this.birthdayButtonHandler}>
          Birthday Button for {this.state.name}
        </button>
      </div>
    );
  }
}

export default Card;
