"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import Form from "./components/Form";

export default function Home() {
  const [data, setData] = useState<any>()

  return (
    <main>
      <h1>Luke API Walker</h1>
      <Form setData={setData} />
      <Card className="w-96">
        {data && (
          <CardHeader
            color="gray"
            floated={false}
            shadow={false}
            className=" place-items-center text-center"
          >
            <Typography variant="h6" color="white">
              {data["name"]}
            </Typography>
          </CardHeader>
        )}
        {data &&
          Object.keys(data).map((item: string, i) => {
            return (
              <CardBody key={i}>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {item}:
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {data[item]}
                </Typography>
              </CardBody>
            );
          })}
      </Card>
    </main>
  );
}
