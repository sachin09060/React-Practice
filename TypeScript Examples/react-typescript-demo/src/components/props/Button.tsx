import React from 'react'
type ButtonPropsType = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonPropsType) => {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event, 1)}>Click</button>
    </div>
  )
}

export default Button