const initialState = {
  count: 0,
  movie: [],
  newMovie: {
    movieName: "",
    yearOfRelease: "",
    director: "",
    src: "",
  },
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    case "SUBMIT_FORM":
      return {
        ...state, movie: [...state.movie, action.payload],
      };
    default:
      return state;
  }
};
