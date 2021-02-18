import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };


  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Add New Movie</h1>
        <div className="row">
        <div class="col"></div>

        <div class="col-8">
            <form>
                {this.renderInput("title", "Movie Title")}
                {this.renderInput("numberInStock", "Total Stock", "number")}
                {this.renderInput("dailyRentalRate", "Rate")}
                {this.renderButton("Save")}
            </form>
        </div>

        <div className="col"></div>
        </div>
        
      </div>
    );
  }
 
}

export default MovieForm;