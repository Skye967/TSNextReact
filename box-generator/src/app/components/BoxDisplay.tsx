import React from 'react'
import classes from './BoxDisplay.module.css'

type Props = {
    boxes: {
        color: string
    }[];
}

function BoxDisplay(props: Props) {
  return (
      <div className={classes.box_container}> 
          {
              props.boxes.map((item, i) => (
                  <div key={i} className={classes.box} style={{backgroundColor: item.color}}></div>
              ))
          }
      </div>
  )
}

export default BoxDisplay