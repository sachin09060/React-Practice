import React, { ReactNode } from 'react'
import "./Button.css"

interface btnProps {
    onClick:() => void;
    children: ReactNode;
}

const Button = (props:btnProps) => {
  return (
    <div>
        <button className='btn' onClick={props.onClick}>
            {props.children}
        </button>
    </div>
  )
}

export default Button