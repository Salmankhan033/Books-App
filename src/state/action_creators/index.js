import { ADD_BOOK, REMOVE_BOOK } from "../constant";
export const addBook = (book) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  };
};

export const removeBook = (book) => {
  console.log(
    "------------------------------------------------------------index on action",
    book
  );
  return (dispatch) => {
    dispatch({
      type: REMOVE_BOOK,
      payload: book,
    });
  };
};
