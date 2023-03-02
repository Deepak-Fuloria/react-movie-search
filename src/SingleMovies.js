import React,{useContext,useEffect,useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import {appContext} from "./Context";

const SingleMovie = () => {
  const [movie,setMovie]=useState(false)
  const url=`https://www.omdbapi.com/?`
  const { id } = useParams();
  console.log(id);

  const getAllMovies=async(url)=>{
    try{
       
        const res= await fetch(url)
         const data= await res.json()
        console.log(data)
        setMovie(data)
       
        
      
     
        
    }
    catch(err){
      
   console.log(err)
    }
   
    }

useEffect(()=>{ 
getAllMovies(`${url}i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
},[id])

  return (
    
    <section className="movie-section">
      {movie?
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
      :<section className="movie-section ">
      <div className="loading">Loading....</div>;
    </section>}
    </section>
  );
};

export default SingleMovie;