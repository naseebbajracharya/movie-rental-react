import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';
import TableBody from './common/tableBody';

class MoviesTable extends Component {

    columns = [
        {path: 'title', label:'Title'},
        {path: 'genre.name', label:'Genre'},
        {path: 'numberInStock', label:'Available Stock'},
        {path: 'dailyRentalRate', label:'Rate'},
        {key: 'like'},
        {key: 'delete'},
    ];
 
    render() { 
        const {movies, onDelete, onLike, onSort, sortColumn} = this.props;

        return ( 
            <table className="table table-hover">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>

                <TableBody columns={this.columns} data={movies}/>
                {/* <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={() => onLike(movie)}/></td>
                        <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm"><i class="fa fa-trash"> </i> Remove</button></td>
                    </tr>
                    ))}
                    
                </tbody> */}
            </table>
         );   
    }
}
 
 
export default MoviesTable;