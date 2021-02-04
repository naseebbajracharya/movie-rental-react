import React, { Component } from 'react';

import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { Paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 7,
        genres: [],
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()]
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
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    render() { 

        const {length: count} = this.state.movies;
        const {pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies} = this.state;

        if (count === 0) 
        return <h5>Sorry, there are no movies in the database!</h5>;

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = Paginate(sorted, currentPage, pageSize);

        return (
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
            </div>

            <div className="col">
            <h5>Showing <span class="badge badge-info">{filtered.length}</span> movies in the database.</h5>

            <MoviesTable movies={movies} sortColumn={sortColumn} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort}/>
        
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