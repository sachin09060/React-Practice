import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";

export const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    getValue: () => {
      if (inputRef.current) {
        return inputRef.current.value;
      }
      return "";
    },
  }));

  return (
    <input
      ref={inputRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ backgroundColor: isFocused ? "green" : "initial" }}
    />
  );
});

// Explanation:

// CustomInput Component:forwardRef is used to forward the ref to the child component.
//useImperativeHandle is used to expose the focus and getValue methods to the UseImperativeHandle component.inputRef is a local ref for the input element.

// UseImperativeHandle:A ref is created using useRef and passed to the CustomInput component.
// When the button is clicked, the parent component calls the focus method and the getValue method exposed by the CustomInput component using the ref.

// This way, the UseImperativeHandle component can interact with the CustomInput component in a controlled manner using the methods defined in
// useImperativeHandle.
