import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setQuery, setLoading }) => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (search.trim() !== "") {
     
      navigate('/'); 

     
      setQuery(search);
      setLoading(true);
      setSearch(""); 
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleMovieTypeClick = (path) => {
    setQuery(""); 
    setSearch("");
    navigate(path); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MovieDb</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰ 
      </button>
      <div className="navbar-right">
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link onClick={() => handleMovieTypeClick("/popular")} to="/popular">Popular</Link></li>
          <li><Link onClick={() => handleMovieTypeClick("/top_rated")} to="/top_rated">Top Rated</Link></li>
          <li><Link onClick={() => handleMovieTypeClick("/upcoming")} to="/upcoming">Upcoming</Link></li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            value={search}
            placeholder="Movie Name"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
