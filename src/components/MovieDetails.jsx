import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetails.css'
import CastCard from '../minicomponents/CastCard';
const MovieDetails = () => {
    const Api_key = 'c45a857c193f6302f2b5061c3b85e743';
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [casts, setCasts] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setMovie(data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`)
        .then(response => response.json())
        .then(castdata => {
          setCasts(castdata.cast);       
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [id]);

    // console.log(movie);
    // console.log(casts);
  return (<>
    <div className="movie-details-container">
  <div className="left-section">
    <div className="upper-content">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <div className="title-tagline">
          {movie.title}: {movie?.tagline}
          
        </div>
        
        <div className="movie-rating">Rating: {movie?.vote_average}</div>
        <div><span className='time'>{movie?.runtime} min</span>  <span className='genre'>{movie?.genres?.map((genre) => genre.name).join(", ")}</span></div>
        
        <div className="release-date">Release Date: {new Date(movie.release_date).toDateString()}</div>
        
      </div>
    </div>
    <div className="lower-content">
    <h2>Overview</h2>
    <p>{movie.overview}</p>
  </div>




  </div>
  <div className="right-section">
      <img src={movie.backdrop_path?`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  
</div>
<div className='cast-container'>
<h2>Cast</h2>
<div className="cast-list">
 
{
          casts?.map((cast, index) => (
            <CastCard index={index} castMember={cast}/>
          ))
        }
        </div>
        </div>

</>

  )
}

export default MovieDetails