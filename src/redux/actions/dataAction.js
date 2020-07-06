
const addItem = (list) => {
  return {
    type: "ADD",
    payload: list
  };
};

const removeItem = (list) => {
  return {
    type: "REMOVE",
    payload: list
  };
};


export { addItem, removeItem };
