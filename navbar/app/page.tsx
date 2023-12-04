'use client'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'
import { createContext, useState } from 'react'
import React from 'react'

export const NameContext = React.createContext<{ name: string, setName: Function }>({ name: '', setName: Function})

export default function Home() {
  const [name, setName] = useState('Test')


  return (
    <div className="">
        <NameContext.Provider value={{ name, setName }}>
          <Wrapper>
            <Navbar />
            <FormWrapper />
          </Wrapper>
        </NameContext.Provider>
    </div>
  );
}
