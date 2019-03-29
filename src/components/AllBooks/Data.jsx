import React from 'react';
import DataItem from './DataRowItem';

const Data=({getbooks,onDeleteClick,onUpdateClick})=>{
    return (   
        <table className="BookRecord">
                 <thead>
                     <tr>
                         {/* <td>Sr No</td> */}
                         <td>Book Title</td>
                         <td>Cover</td>
                         <td>Author</td>
                         <td>Publisher</td>
                         <td>Action</td>
                     </tr>
                 </thead>            
     {   getbooks.map((book) => {             
            return ( <DataItem book={book}
                 key={book.id} 
                  onDeleteClick={()=>onDeleteClick(book.id)}
                  onUpdateClick={(book)=>onUpdateClick(book)}
                  />);
        })  } 
             </table>
    )
}

export default Data;



