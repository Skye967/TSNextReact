import React, { SyntheticEvent, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

type Props = {
  addBox: Function;
};

type Box = {
  color: string;
};

function BoxForm(props: Props) {
const [box, setBox] = useState<Box>({ color: "" });

    function submitHandler(e: SyntheticEvent) {
    e.preventDefault();
    props.addBox(box);
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="boxColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          onChange={(e) => setBox({ color: e.target.value })}
          type="text"
          placeholder="Enter Color"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BoxForm;
