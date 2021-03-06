import React, { Component } from 'react';

import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import {Paginate} from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 6,
        selectedGenre: null,
        searchQuery: "",
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
        this.setState({selectedGenre: genre, currentPage: 1, searchQuery: ""});
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
      };

    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    getPagedData = () => {
        const {pageSize, currentPage, sortColumn, selectedGenre, searchQuery, movies: allMovies} = this.state;

        let filtered = allMovies;
        if (searchQuery)
        filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = Paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    }

    render() { 

        const {length: count} = this.state.movies;
        const {pageSize, currentPage, sortColumn, searchQuery} = this.state;

        if (count === 0) 
        return <h5>Sorry, there are no movies in the database!</h5>;

       const {totalCount, data: movies} = this.getPagedData();

        return (
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
            </div>

            <div className="col">
                
            <h5>Showing <span class="badge badge-info">{totalCount}</span> movies in the database. <Link to='/movies/addnew' className='btn btn-sm btn-success' style={{borderRadius: 0}}>Add New Movie</Link> </h5>

            <SearchBox value={searchQuery} onChange={this.handleSearch}/>

            <MoviesTable movies={movies} sortColumn={sortColumn} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort}/>
        
        <Pagination itemsCount={totalCount} 
                    pageSize={pageSize} 
                    currentPage={currentPage} 
                    onPageChange={this.handlePageChange} />
            </div>
                
        </div>
        );
        
        
    }
}
 
export default Movies;