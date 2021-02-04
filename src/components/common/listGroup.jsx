import React from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect} = props;
        return ( 
            <ul className="list-group">
                {items.map(item => <li onClick={() => onItemSelect(item)} key={item[valueProperty]} 
                className={ item === selectedItem ? "list-group-item list-group-item-warning active" : "list-group-item list-group-item-warning"}>
                    {item[textProperty]}
                    </li>)} 
            </ul>
         );
    }
 
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;