export const addTodo = (data) => {
  return {
    type: "add-todo",
    payload: data,
  };
};

export const toggleCheckMark = (data) => {
  return {
    type: "toggle-check",
    payload: data,
  };
};
