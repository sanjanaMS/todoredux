// var initialState = {
//   todo: [],
// };
export const TodoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "add-todo":
      console.log("payload", payload);
      return [...state, payload];

    case "toggle-check":
      return [...payload];

    default:
      return state;
  }
};
