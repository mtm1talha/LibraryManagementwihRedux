
import React, { Component } from 'react';

class EditBook extends Component {
    constructor(props) {
        super(props);    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: this.props.book.id,
            booktitle: this.booktitle.value,
            cover: this.cover.value,
            author: this.authorname.value,
            publisher: this.publishername.value,            
        }
        console.log(book)
        this.props.onUpdateClick(book);        
    }
    render() {
       const {id,booktitle,cover,author,publisher}=this.props.book;
         return (
            <tr
                key={this.props.book.id}>                
                <td>
                    <input type="text" ref={(input)=>this.booktitle=input} value={booktitle} required />
                </td>
                <td>
                    <input type="text"  ref={(input)=>this.cover=input} value={cover} required />
                </td>
                <td>
                    <input type="text"  ref={(input)=>this.authorname=input} value={author} required />
                </td>
                <td>
                    <input type="text"  ref={(input)=>this.publishername=input} value={publisher} />
                </td>
                <td>  <button onClick={(e) => this.handleSubmit(e)}>Update</button></td>
            </tr>
        );
    }
}


export default EditBook;