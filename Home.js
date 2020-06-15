import React, { Component } from 'react';
import { MoviesList } from '../components/MuvieList.js';
import { Title } from '../components/Title.js';
import { SearchForm } from '../components/SearchForms.js';


export class Home extends Component{
    
    state = { userSearch: false,results: []}
    
    _handleResults = (results) =>{
        this.setState({ results, usedSearch:true})
    }
    _renderResults(){
        return this.state.results.length === 0 
        ?<p className="text-white">Oh oh... No se han encontrado resultados</p> 
        :<MoviesList movies={this.state.results}/>

    }
    render(){
        return(
            <div>
                <Title > Buscador de Peliculas ! </Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                    ?this._renderResults()
                    : <small className="text-white text-center">Utiliza el formulario para buscar una Pelicula</small>
                }
            </div>
        )
    }
}