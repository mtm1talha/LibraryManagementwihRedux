import React from 'react';
import  DataState  from './Data';
const AuthorRecord =()=> {
        
        return (<div>
            <table className="BookRecord">
                <thead>
                    <tr>
                        {/* <td>Book Title</td>
                        <td>Cover</td> */}
                        <td>Author</td>
                        <td>NO of Books</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <DataState />
                </tbody>
            </table>
        </div>);
    
}
export default (AuthorRecord);