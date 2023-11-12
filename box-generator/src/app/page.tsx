"use client";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";

type Box = {
  color: string;
};

const Home: React.FC = () => {
  const [boxes, setBoxes]: [
    boxes: Box[],
    setBoxes: React.Dispatch<React.SetStateAction<Box[]>>
  ] = useState<Box[]>([]);

  function addBox(box: Box) {
    const newBoxArr: Box[] = [...boxes];
    newBoxArr.push(box);
    setBoxes(newBoxArr);
  }

  return (
    <div>
      <h1>Box Generator</h1>
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} />

    </div>
  );
};

export default Home;
