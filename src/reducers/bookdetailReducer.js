const defaultState = {
  items: [],
  errors: {},
  filteredbook: [],
  searchvalue: false,
  isfetch: false,
}
const _ = require('lodash')

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_BOOK_BEGIN':
      console.log("Reducers FETCH_BOOK_BEGIN")
      return {
        ...state,
        isfetch: !state.isfetch
      };
    case 'FETCH_BOOK_SUCCESS':
      console.log("Reducers FETCH_BOOK_SUCCESS", action.payload)
      return {
        ...state,
        isfetch: !state.isfetch,
        items:  action.payload
      };
      case 'UPDATE_BOOK':
      console.log("UPDATE_BOOK")
      return{
        ...state,
        items:state.items.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            booktitle: action.payload.booktitle,
            cover: action.payload.cover,
            author: action.payload.author,
            publisher: action.payload.publisher,
            date: action.payload.date,
            isEditing: false
          }
        } else return book;
      })
    }
    case 'ADD_BOOK':
    return{
      ...state,
      items:state.items.concat(action.payload)
    }
    case 'DELETE_BOOK':
    return{
      ...state,
      items:state.items.filter((book) => book.id !== action.id)
    }
       
    default:
      return state;
  }
};
