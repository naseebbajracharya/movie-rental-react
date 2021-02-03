import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { Paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 7,
        genres: []
    };

    componentDidMount() {
        const genres = [{name: 'All Genres'}, ...getGenres()]
        this.setState({movies: getMovies(), genres});
    }

    handleDelete = (movie) => {
        //console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = (movie) => {
        //console.log("Liked", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = (page) => {
        //console.log(page);
        this.setState({currentPage: page});
    }

    handleGenreSelect = (genre) => {
        //console.log(genre);
        this.setState({selectedGenre: genre});
    }

    render() { 

        const {length: count} = this.state.movies;
        const {pageSize, currentPage, selectedGenre, movies: allMovies} = this.state;

        if (count === 0) 
        return <h5>Sorry, there are no movies in the database!</h5>;

        const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const movies = Paginate(filtered, currentPage, pageSize);

        return (
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
            </div>

            <div className="col">
            <h5>Showing <span class="badge badge-info">{filtered.length}</span> movies in the database.</h5>
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
                {movies.map(movie => (
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"><i class="fa fa-trash"> </i> Remove</button></td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <Pagination itemsCount={filtered.length} 
                    pageSize={pageSize} 
                    currentPage={currentPage} 
                    onPageChange={this.handlePageChange} />
            </div>
                
        </div>
        );
        
        
    }
}
 
export default Movies;