import React,{useContext} from 'react'
import { appContext } from './Context'
import {NavLink} from "react-router-dom"


const Movies = () => {
   
  const imgUrl = "https://via.placeholder.com/200/200";
    const {movie}=useContext(appContext)
    
   
  return (
    <>
    {/* if movie is present then only show data else remain as it is  */}
    <section className="container movie-page">
      <div className="grid grid-4-col">
        {movie
          ? movie.map((curMovieElem) => {
              const { imdbID, Title, Poster } = curMovieElem;
              const movieName = Title.substring(0, 15);

              return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="card">
                    <div className="card-info">
                      <h2>
                        {movieName.length > 13
                          ? `${movieName}...`
                          : movieName}
                      </h2>
                      <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                    </div>
                  </div>
                </NavLink>
              );
            })
          : <h1 className='error'>movie not found</h1>}
      </div>
    </section>
  </>
    
  )
}

export default Movies