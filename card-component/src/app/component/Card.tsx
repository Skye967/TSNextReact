import React, { Component } from 'react'

type Props = {
    id: string;
    person: {
        name: string;
        age: number;
        hairColor: string;
    }
}

class Card extends Component<Props> {
    name: string;
    age: number;
    hairColor: string;

    constructor(props: Props) {
        super(props);
        this.name = props.person.name;
        this.age = props.person.age;
        this.hairColor = props.person.hairColor;
    }

  render() {
    return (
      <div>
            <h3>{this.name}</h3>
            <p>{this.age}</p>
        <p>{this.hairColor}</p>
      </div>
    );
  }
}

export default Card