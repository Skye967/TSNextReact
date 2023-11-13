"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { peopleData, carData, locationData } from "../data/tabData";

export default function Tabs() {
  const [data, setData] = useState<object[]>([]);

  return (
    <main>
      <h1>Tab Component</h1>
      <div>
        <Button onClick={() => setData(peopleData)}>Tab 1</Button>
        <Button onClick={() => setData(carData)}>Tab 2</Button>
        <Button onClick={() => setData(locationData)}>Tab 3</Button>
      </div>
      <div>
        <h2>Show Content here</h2>
        {data.map((item, i) => (
          <div key={i}>
            {Object.entries(item).map((x, i) => (
              <p key={i}>
                {x[0]}: {x[1]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
