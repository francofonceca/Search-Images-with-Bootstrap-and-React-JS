import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonToHome.js'
const API_KEY = '45117369'

export class Details extends Component{
    static propTypes = {
        //shape es un tipo de la clase de switch y route que me permite tener mas de una caracteristica de resultado
        //params para saber los paramentros
        //is exact para saber si se recibieron parametros
        match : PropTypes.shape({
            params: PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })    
    }
    state = {movie : {}}
    //llamo a la api y le envio a movie todo el resultado de la pelicula con la id= id
    _fetchMovie({ id }){
        fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&i="+ id +"")
        .then(res => res.json())
        .then(movie =>{
           console.log({movie})
           this.setState({ movie })
        })
    }

    componentDidMount(){
        console.log(this.props)
        //de match saco la variable params y se la paso a la id, acordate que params la paso en app.js con nombre de id
        //SI YO EN APP asigno una variable despues de details/ , tengo que usarla aca con el mismo name
         const { id } = this.props.match.params
        this._fetchMovie({ id })
    }
    _goBack(){
        window.history.back()
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot}= this.state.movie
        return(
            <div className="row default-color-dark " style={{paddingTop:80}}>
                <div className="col-md-3 mb-4">
                    <div className="card ">
                        <div className="view p-1">
                            <img src={Poster}/>
                        </div>
                    </div>
                </div>
                <div className="col-md mb-4">
                    <div className="card-body text-center text-white">
                        <h1 className="card-title title text-white">{Title}</h1>  
                        
                        <h3>{Actors}</h3>
                        <br/>
                        <span>{Metascore}</span>
                        <br/>
                        <p>{Plot}</p>
                        <br/>
                        <br/>
                        <br/>
                        <ButtonBackToHome/>
                    </div>
                </div>

            </div>
           
        )
    }
}