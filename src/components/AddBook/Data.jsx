
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBook} from '../../actions/index';
import ErrorState from './Error';
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          booktitle:'',
          cover:'',
          authorname:'',
          publishername:'',
          date:''
         }         
    this.handleSubmit = this.handleSubmit.bind(this);   
    }
    handleChangeBookTitle(e){
      this.setState({
        booktitle:e.target.value
      })
    }
    handleChangeCover(e){
      this.setState({
        cover:e.target.value,
      })
    }
    handleChangeAuthor(e){
      this.setState({
        authorname:e.target.value,
      })
    }
    handleChangePublisher(e){
      this.setState({
        publishername:e.target.value,
      })
    }
    handleChangeDate(e){
      this.setState({
        date:e.target.value
      })
    }
    handleSubmit(event) {
        event.preventDefault();
        let book={
          id: new Date(),
          booktitle:this.state.booktitle,
          cover:this.state.cover,
          author:this.state.authorname,
          publisher:this.state.publishername,
          date:this.state.date,
          editing: false
        }
       var res= this.props.books.some(function (obj) { return obj['booktitle'] === book.booktitle })
       console.log("book",this.props.books,"onclick click ",res);
       if(res===false){
         this.props.dispatch(addBook(book));
        // this.props.addBook(book);       
        this.setState({
            booktitle:'',
            cover:'',
            authorname:'',
            publishername:'',
            date:''
          });
       }
        else{
            return <ErrorState/>
        }
       }
      
    render() { 
        return (   
            
              <div className="modal-body">
              <form  onSubmit={(val) => this.handleSubmit(val)}>
                <input type="text" hidden id="bookid" value={this.props.id}/>
                <label>Book Name</label>
                <input type="text" onChange={this.handleChangeBookTitle.bind(this)} id="bookname" value={this.state.booktitle} required/>                
                <label>Cover</label>
                <input type="text"onChange={this.handleChangeCover.bind(this)} id="covername" value={this.state.cover} required/>
                <label>Author</label>
                <input type="text" onChange={this.handleChangeAuthor.bind(this)} id="authorname" value={this.state.authorname} required/>
                <label>Publisher</label>
                <input type="text" onChange={this.handleChangePublisher.bind(this)} id="publishername" value={this.state.publishername} required/>
                <label>Date</label>
                <input type="date" onChange={this.handleChangeDate.bind(this)} id="date" value={this.state.date} />
                
                <button className='submit'>Add!</button>
        </form>                
            </div> );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.items
    }
}
export default connect(mapStateToProps)(Data);