import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAysncMovies, fetchAysncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.css";

const Header = () => {
  const [term, setterm] = useState('')
const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(term.length===0) return alert("Please Enter a term for search")
    dispatch(fetchAysncMovies(term))
    dispatch(fetchAysncShows(term))
    // setterm('')
  }
  return (
    <div className="header">
        <div className="logo"><Link to="/"><span className="logoText"> Movie App </span></Link></div>
        <div className="searchWrapper">
          <form onSubmit={handleSubmit}>
            <input type="text"  className="searchInput" placeholder="Search moives & shows" value={term} onChange={(e)=>setterm(e.target.value)}/>
          </form>
        </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;