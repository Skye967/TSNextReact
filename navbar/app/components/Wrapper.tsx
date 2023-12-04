import React from 'react'

type Props = {
    children: React.ReactElement[]
}

function Wrapper(props: Props) {
  return (
      <div className=''>
          {props.children}
    </div>
  )
}

export default Wrapper