import React, { Component } from 'react';
import BooksRecord from '../components/AllBooks/AllBookComponent';
import AddBook from '../components/AddBook/AddBookComponent';
export default class Home extends Component {
    render() {
        return (
            <div>
                <BooksRecord />
                <AddBook />
            </div>
        )
    }
}