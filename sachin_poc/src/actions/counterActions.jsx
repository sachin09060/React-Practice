export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const reset = () => ({
  type: "RESET",
});

export const submitForm = (data) => ({
  type: "SUBMIT_FORM",
  payload: data
});