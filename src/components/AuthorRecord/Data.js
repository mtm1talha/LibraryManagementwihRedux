import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankState from './BlankState';
import * as bookAction from '../../actions/index'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    deleteBook(e, name) {
        e.preventDefault();
        this.props.DeleteAuthorBooks(name);
    }   
    render() {
        const record=this.props.books;
        const result={};
      //  record.forEach(function(i) { result[i].author = (result[i]author||0) + 1;});
        for (let i = 0; i < record.length; i++) {           
                result[record[i].author] = (result[record[i].author] || 0) + 1;   
        }
    console.log("count",result);
    const list= Object.keys(result).map(key => ({ "Name":key,"numberofBook": result[key] }));    
        console.log(list)
        if (record.length > 0) {
            
            return (
                list.map((book) => {                    
                    return (<tr
                        key={book.Name}
                    >
                        {/* <td>{book.booktitle}</td>
                        <td>{book.cover}</td> */}
                        <td>{book.Name}</td>
                        <td>{book.numberofBook}</td>
                        <td><button onClick={(e) => this.deleteBook(e, book.Name)} className="btn btn-danger">Delete</button></td>
                    </tr>);
                })
            )
        }
        else return <BlankState />
    }
}

const mapStateToProps = (state) => {
    return {
        books:state.books.items
    }
}
const matchDispatchToProps = (dispatch) => {
    return {
        DeleteAuthorBooks: index => dispatch(bookAction.DeleteAuthorBooks(index)),
    }
};
export default connect(mapStateToProps, matchDispatchToProps)(Data);
