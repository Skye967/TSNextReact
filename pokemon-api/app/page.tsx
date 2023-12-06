'use client'
import Image from 'next/image'
import { Button } from '@material-tailwind/react'
import FetchPokemon from './components/FetchPokemon'

export default function Home() {



  return (
    <div >
      <h1>Pokemon API</h1>
      <FetchPokemon/>
    </div>
  )
}
