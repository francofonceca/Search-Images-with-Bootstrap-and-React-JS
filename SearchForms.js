import React, { Component } from 'react';
const API_KEY = '45117369'
export class SearchForm extends Component{
    state = {
        inputMovie:''
    }
    _handleChange = (e) =>{
        this.setState({ inputMovie: e.target.value})
    }
    _handeSubmit = (e) =>{
        e.preventDefault()
        const { inputMovie } = this.state
        //hacemos una peticion a la api y la recibimos como json
        fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&s="+ inputMovie + "")
            .then(res => res.json())
            .then(results =>{
                //en caso de que no haya resultados, inicializo con cero o [] las variables como valor predeterminado
                const { Search = [], totalResults = '0' } = results
                console.log({Search, totalResults})
                //usamos la funcion onResults para enviar lo que recibimos. osea el resultado de las peliculas encontradas
                this.props.onResults(Search)
            })

    }

    render(){
        return(
            <form onSubmit={this._handeSubmit}>
                <div className="field has-addons">
                        <div className="control md-form">
                        <input
                                 className="input form-control "
                                 onChange={this._handleChange}
                                 type="text" 
                                 placeholder="Pelicula a Buscar..."
                                 id="materialLoginFormEmail" />
                        
                        </div>
                        <div className="control">
                            <button className="btn btn p-2">
                            Buscar
                            </button>
                        </div>
                </div>
            </form>
        )
    }
}