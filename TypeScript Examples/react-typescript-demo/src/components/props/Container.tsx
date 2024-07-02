import React from 'react'

type StylePropsType = {
    styles: React.CSSProperties
}
const Container = (props: StylePropsType) => {
  return (
    <div style={props.styles}>Text content goes here!</div>
  )
}

export default Container