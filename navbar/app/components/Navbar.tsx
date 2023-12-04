import React, { useContext } from 'react'
import { NameContext } from '../page'

type Props = {}

function Navbar(props: Props) {
  const nameContext = useContext(NameContext)


  return (
    <div className='bg-purple-800 text-white'>Hi, {nameContext.name}</div>
  )
}

export default Navbar