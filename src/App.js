import React,{useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const API_url = "http://www.omdbapi.com?apikey=2bef9b45"
const App = () =>{
    const [movies,setmovies] = useState([]);
    const [searchterm, setsearchterm] = useState([''])
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_url}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search)
    }
    useEffect(()=>{
        searchMovies('Spiderman')
    },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type='text'
                placeholder="Search for movies"
                value={searchterm}
                onChange={(e)=>{ setsearchterm(e.target.value)

                }}></input>
                <img src= {SearchIcon} 
                alt = "search"
                onClick={()=>{ searchMovies(searchterm)

                }}></img>
            </div>
            {
                movies?.length>0
                ?
                (
                    <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie= {movie}/>
                        ))
                        

                    }
                    
                    </div>
                )
                :
                (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;