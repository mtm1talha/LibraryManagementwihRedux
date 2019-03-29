import React ,{ Component } from 'react';
import EditBookState from './EditBook';
class DataRowItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing:false,
            Id:null
        }
    }
    handleSubmit(event,id) {
        event.preventDefault();
      this.setState({isEditing:true,Id:id})      
    }
    handleUpdate(book){
        this.setState({isEditing:false})
        this.props.onUpdateClick(book);
    }
    render() {
        const { book, onDeleteClick}=this.props;
           console.log("DataRowItem Component ", book,this.state.isEditing,this.state.Id,book.isEditing)
        return(
            <tbody>
           {/* / {book.isEditing===undefined &&<h1>undefinedbook</h1>} */}
            {this.state.isEditing  && (book.id===this.state.Id)
                 && <EditBookState book={book}  
                 onUpdateClick={(book)=>this.handleUpdate(book)}/>}
            { !this.state.isEditing  && (  <tr key={book.id}>
                {/* <td>{this.props.books.length}</td> */}
                <td>{book.booktitle}</td>
                <td>{book.cover}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td> <button onClick={(e, val) => this.handleSubmit(e, book.id)} className="btn btn-primary">Edit</button>
                    <button onClick={() => onDeleteClick()} className="btn btn-danger">Delete</button>
                </td>
            </tr>
            )}
            </tbody>
        )
    }
}


export default DataRowItem;