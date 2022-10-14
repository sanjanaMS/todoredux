export const addTodo = (data) => {
  return {
    type: "add-todo",
    payload: data,
  };
};
