import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./TaskDisplay.module.css";

type Task = {
  task: string;
  isCompleted: boolean;
};

type Props = {
  taskList: Task[];
  completeTask: Function;
};

function TaskDisplay(props: Props) {
  return (
    <div>
      {props.taskList.map((item, i) => (
        <div className={classes.task} key={i}>
          <p
            style={{
              textDecoration: item.isCompleted === true ? "line-through" : "",
            }}
          >
            {item.task}
          </p>
          <Form.Check
            checked={item.isCompleted}
            onChange={(e) => props.completeTask(i, e)}
            type="checkbox"
          />
          <Button variant="dark">Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default TaskDisplay;
