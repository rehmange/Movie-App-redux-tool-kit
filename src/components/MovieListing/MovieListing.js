import React from "react";
import { useSelector } from "react-redux";
import { getAllMoives,getAllShows }  from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";
const MovieListing = () => {
  
  const movies = useSelector(getAllMoives);
  const shows = useSelector((state)=>state.movies.shows);
  const loading = useSelector((state)=>state.movies.loading);
  // const shows = useSelector(getAllShows );
  console.log(loading,"loading========>")
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
      <h2>Movies</h2>
      {loading?(<div className="loadingText">...Loading</div>):(<>
        
        <div className="movie-container">{renderMovies}</div></>)
      }
      </div>
      <div className="show-list">
      <h2>Shows</h2>
      {loading?(<div className="loadingText">...Loading</div>):(<>
        
        <div className="movie-container">{renderShows}</div></>)
      }
      </div>
    </div>
  );
};

export default MovieListing;