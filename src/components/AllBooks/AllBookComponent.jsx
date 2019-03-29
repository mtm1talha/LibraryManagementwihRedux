import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DataState from './Data';
import LoadingState from './loading';
import ErrorState from './Error';
import BlankState from './BlankState';
import SearchBook from './SearchBook';


import {fetchBookRecord, fetchBooks, DeleteBook, EditBook,UpdateBook } from '../../actions/index';
class BooksRecord extends Component {
    constructor(props) {
        super(props);  
        this.state={
            filteredlist:[],
            flagsearch:false
        } 
        this.DeleteBook = this.DeleteBook.bind(this)
      }
    componentDidMount() {
        this.props.dispatch(fetchBookRecord());
    }
    DeleteBook(id) {
        console.log("delete",id)
        this.props.dispatch(DeleteBook(id));
    }
    UpdateBook(book){
        console.log("updatebook",book)
        this.props.dispatch(UpdateBook(book));
    }
    handleSearch(val){
        const _ = require('lodash');
        let searchlist=_.filter(this.props.books, (o) => _.toLower(o.booktitle).includes(_.toLower(val)));
        this.setState({filteredlist:val===''?[]: searchlist,
                        flagsearch:val===''?false:true
                                        
        });
    }
    render() {
        const { books, isFetching } = this.props;        
        const allbooks= this.state.flagsearch===false? books:this.state.filteredlist;        
        console.log("Main Book Component error,isfetch,items",isFetching,allbooks)  
        // if (isError) {
        //     return <ErrorState/>;
        // }
        return (<div>     
            <SearchBook  allBooks={books}  onHandleSearch={(id)=>{this.handleSearch(id)}}/>       
            {/* {isError && (<ErrorState />)} */}
            {isFetching && allbooks.length === 0 && <LoadingState />}
            {!isFetching && allbooks.length === 0 && <BlankState />}
            { allbooks.length > 0 && (                 
                 <DataState getbooks={allbooks}                  
                  onDeleteClick={(id)=>{this.DeleteBook(id)}}
                onUpdateClick={(book)=>{this.UpdateBook(book)}}               
                     />              
                )
            }
            {/* {isediting && <EditBookState/>} */}

        </div>);
    }
}
const mapStateToProps = state => ({
    books: state.books.items,
    isFetching: state.books.isfetch
});
BooksRecord.propTypes = {
    books: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
export default connect(mapStateToProps)(BooksRecord);