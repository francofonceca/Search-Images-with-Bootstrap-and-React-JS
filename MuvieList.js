import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Muvie';
export class MoviesList extends Component{
    static propTypes = {
        movies: PropTypes.array
    }
    render(){
        const { movies } = this.props
        return(
            <div className=" container">
                <div className="container">
                    <p className="text-white text-left py-5 h2">Tus resultados:</p>
                </div> 
                <div className="MovieList">
                {    
                    movies.map(movie =>{
                        return(
                        <div key={movie.imdbID}  className="MovieList-item col-lg-3 col-md-4 col-sm-6">
                            <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                year= {movie.Year}
                                poster= {movie.Poster}      
                            />
                        </div>
                        );
                    })
                }
                </div>
            </div>
        )
    }
}