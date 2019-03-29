import {BookRecord} from "../API/index";

export const fetchBookRecord = () => {
    return dispatch => {
      dispatch({
        type: 'FETCH_BOOK_BEGIN'
      })
      let records = BookRecord;
      return setTimeout(() => {
        dispatch({
          type: 'FETCH_BOOK_SUCCESS',
          payload: records
        })
      }, 3000)
    }
  }  

export const addBook=(book)=>{
    console.log("res", book)
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}
export const UpdateBook=(book)=>{
  // return function(dispatch,getstate){
  //   let updatebook=getstate.
  // }  
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}
export const DeleteBook= (id) => {
    console.log("delete id",id)
    return {
        type: 'DELETE_BOOK',
        id: id
    }   
}
export const EditBook= (id) => {
    console.log("EditBook id",id)

    return {
        type: 'EDIT_BOOK',
        id: id
    }   
}
export const SearchBookTitle= (booktitle) => {    
    return {
        type: 'SEARCH_BOOK',
        payload: booktitle
    }   
}
export const selectBook = (book) => {  
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
};
export const checkExistingBook = (book) => {
    return {
        type: 'BOOKTITLE_EXIST',
        payload: book.bookTitle
    }
};
export const DeleteAuthorBooks= (name) => {
    console.log("delete id",name)
    return {
        type: 'DELETE_AUTHOR_BOOKS',
        payload: name
    }   
}
export const DeletePublisherBooks= (name) => {
    console.log("delete id",name)
    return {
        type: 'DELETE_PUBLISHER_BOOKS',
        payload: name
    }   
}

