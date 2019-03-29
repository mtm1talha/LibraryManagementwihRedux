import React from 'react';

const SearchBook = ({ onHandleSearch }) => {
    return (
    <div className="searchBar">
        <input className="form-control" onChange={(e) => onHandleSearch(e.target.value)} placeholder="Search Book Title" />
    </div>
    );
}
export default SearchBook;
