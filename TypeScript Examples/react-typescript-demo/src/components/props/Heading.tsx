import React from 'react'

type HeadingType ={
    children : string
}
const Heading = (props: HeadingType) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Heading