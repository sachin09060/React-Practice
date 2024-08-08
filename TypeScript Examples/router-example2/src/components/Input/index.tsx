import React from 'react'

interface InputProps{
    type : string;
    name : string;
}

const Input = (props: InputProps) => {
  return (
    <div>
        <input type={props.type} name={props.name} required/>
    </div>
  )
}

export default Input