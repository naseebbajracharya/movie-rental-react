import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    render() { 
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Available Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                    <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button className="btn btn-danger btn-sm"><i class="fa fa-trash"> </i> Remove</button></td>
                </tr>
                ))}
                
            </tbody>
        </table>
    }
}
 
export default Movies;