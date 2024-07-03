import React, {useEffect, useRef} from 'react'

const DOMRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    // For DOM reffrences specify the DOM element type

    useEffect(() => { 
        inputRef.current.focus()
    }, [])
    
  return (
    <div>
        <input type="text"  ref={inputRef}/>
    </div>
  )
}

export default DOMRef