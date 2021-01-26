import React, { Component } from 'react';
import Like from './common/like';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        //console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    render() { 

        const {length: count} = this.state.movies;

        if (count === 0) 
        return <h5>Sorry, there are no movies in the database!</h5>;

        return (
            <React.Fragment>
                <h5>Showing {count} movies in the database.</h5>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Available Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked}/></td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"><i class="fa fa-trash"> </i> Remove</button></td>
                </tr>
                ))}
                
            </tbody>
        </table>
        </React.Fragment>
        );
        
        
    }
}
 
export default Movies;