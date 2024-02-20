import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.action} className={props.mode === true ? "btn dark": "btn light"} >{props.title}</button>
  )
}

export default Button