import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

    const {itemCount, pageSize} = props;

    const pagesCount = itemCount/pageSize;

    return <nav>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a onClick="" className="page-link">1</a>
            </li>
        </ul>
    </nav>;
}
 
export default Pagination;