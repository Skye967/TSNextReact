'use client'
import { useState } from "react";
import Card from "./component/Card";

const DummyPeople: {
  id: string;
  name: string;
  age: number;
  hairColor: string;
}[] = [
    {
      id: "p1",
      name: "Jane Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      id: "p2",
      name: "John Smith",
      age: 88,
      hairColor: "Brown",
    },
    {
      id: 'p3',
      name: "Millard Fillmore",
      age: 50,
      hairColor: "Brown",
    },
    {
      id: 'p4',
      name: "Maria Smith",
      age: 62,
      hairColor: "Brown",
    },
  ];

export default function Home() {

  return (
    <main>
      <h1>Card Component Exercise</h1>
      <div>
        {
          DummyPeople.map((item,x) => {
            return (
              <div key={item.id}>
                <Card
                  person={{
                    name: item.name,
                    age: item.age,
                    hairColor: item.hairColor,
                  }}
                />
              </div>
            );
          })
        }
      </div>
    </main>
  );
}
