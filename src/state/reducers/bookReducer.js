import { ADD_BOOK, REMOVE_BOOK } from "../constant";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.splice(action.payload, 1);

    default:
      return state;
  }
};
export default reducer;
