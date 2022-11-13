import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import  {fetchAysncMovies,fetchAysncShows} from "../../features/movies/movieSlice";


const Home = () => {
  let movieText = "harry"
  let showsText = "friends"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAysncMovies(movieText,1))
    dispatch(fetchAysncShows(showsText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;