// all counter reducers goes here
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + parseInt(action.payload);

    case 'DECREMENT':
      return state - parseInt(action.payload);

    default:
      return state;
  }
};

export default counterReducer;
