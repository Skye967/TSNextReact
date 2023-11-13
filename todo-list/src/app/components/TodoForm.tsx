import React, { BaseSyntheticEvent } from 'react'
import {Button, Form} from 'react-bootstrap';
import classes from './Form.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
    createTask: Function;
};

// type Task = {
//   task: string;
//   isCompleted: boolean;
// };

function TodoForm(props: Props) {

  function submitHandler(e: BaseSyntheticEvent) {
        console.log(e.target[0].value)
        e.preventDefault();
        props.createTask({task: e.target[0].value, isCompleted: false});
      }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="task">
        <Form.Control type="text" placeholder="Enter Task"></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default TodoForm