import React, { Component } from 'react';
import Like from './common/like';

const MoviesTable = (props) => {

    const {movies, onDelete, onLike, onSort} = props;

    return ( 
        <table className="table table-hover">
            <thead>
                <tr>
                    <th onClick={() => onSort('title')}>Title</th>
                    <th onClick={() => onSort('genre')}>Genre</th>
                    <th onClick={() => onSort('stock')}>Available Stock</th>
                    <th onClick={() => onSort('rate')}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
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
                
            </tbody>
        </table>
     );
}
 
export default MoviesTable;