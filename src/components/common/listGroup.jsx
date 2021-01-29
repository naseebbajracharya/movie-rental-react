import React, { Component } from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty} = props;
        return ( 
            <ul className="list-group">
                {items.map(item => <li key={item[valueProperty]} className="list-group-item list-group-item-success">
                    {item[textProperty]}
                    </li>)} 
            </ul>
         );
    }
 
export default ListGroup;