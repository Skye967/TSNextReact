import { Select, Option, Input, Button } from '@material-tailwind/react';
import React, { FormEvent, useState } from 'react'
import axios from 'axios';

type Props = {
    setData: Function
}

function Form(props: Props) {
      const [search, setSearch] = useState<string | undefined>();
      const [id, setId] = useState<string | undefined>();

      async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
        const pokemon = await axios
          .get(`https://swapi.dev/api/${search}/${id}`)
          .then((response) => {
              // not the actual JSON response body but the entire HTTP response
            props.setData(response.data)
            return response.data;
          })
          .then((response) => {
            // we now run another promise to parse the HTTP response into usable JSON
            // setPokemon(response.results);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={(e) => submitHandler(e)}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Planet or Person
            </label>
            <Select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => setSearch(e)}
            >
              <Option value="planets">Planets</Option>
              <Option value="people">People</Option>
              <Option value="starships">Starships</Option>
            </Select>
          </div>
          <Input
            className="block appearance-none w-1/2 h-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="ID"
            aria-label="Full name"
            crossOrigin=""
            onChange={(e) => setId(e.target.value)}
          />

          <Button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form