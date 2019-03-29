import React, { Component } from 'react';
import { connect } from 'react-redux';
import  DataState  from './Data';
class PublisherRecord extends Component {
    render() {
        return (<div>
            <table className="BookRecord">
                <thead>
                    <tr>
                    <td>Publisher</td>
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
}
export default connect()(PublisherRecord);