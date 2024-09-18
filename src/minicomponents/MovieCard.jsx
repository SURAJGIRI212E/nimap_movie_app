import React from 'react';
import './MovieCard.css'; // Assuming styles are in this CSS file
import { Link } from 'react-router-dom';

const MovieCard = ({ title, posterUrl, rating,id }) => {
    return (
        <Link className='link' to={`/movie/${id}`}>
        <div className="movies-card">
            
            <img className='movies-poster' src={posterUrl?`https://image.tmdb.org/t/p/w500${posterUrl}`:'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=600'} alt={`${title} poster`}  />
            <div className="movies-info">
                <h4>{title}</h4>
                <p>Rating: {rating}</p>
            </div>
        </div></Link>
    );
};

export default MovieCard;
