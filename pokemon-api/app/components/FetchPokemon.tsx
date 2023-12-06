import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

type Props = {};

function FetchPokemon({ }: Props) {
    const [pokemon, setPokemon] = useState<{name: string, url: string}[]>([])

    async function pokemonCatcher() {
        const pokemon = await axios
          .get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then((response) => {
            // not the actual JSON response body but the entire HTTP response
            return response.data;
          })
          .then((response) => {
            // we now run another promise to parse the HTTP response into usable JSON
            setPokemon(response.results);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
    }

  return (
    <div>
      <Button onClick={pokemonCatcher} className="cursor-pointer">
        Fetch Pokemon
          </Button>
          {pokemon && 
              pokemon.map((item, i) => {
                  return (
                      <div key={i}>
                          {item.name}
                  </div>
              )
          })}
    </div>
  );
}

export default FetchPokemon;
