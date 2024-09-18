import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../minicomponents/Pagination';
import MovieCard from '../minicomponents/MovieCard';
import './Home.css';

const Home = ({ query, loading, setLoading ,setQuery}) => {
  const Api_key = 'c45a857c193f6302f2b5061c3b85e743';
  const { type } = useParams();
  const [moviedata, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const movietype = type || 'popular'; 


  useEffect(() => {
    const fetchMovies = () => {
      const searchURL = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${query}&page=${currentPage}`
        : `https://api.themoviedb.org/3/movie/${movietype}?api_key=${Api_key}&language=en-US&page=${currentPage}`;
      
      setLoading(true);
      fetch(searchURL)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          setTotalPages(data.total_pages);
          setMovieData(data.results);
          
          
         
        })
        .catch(error => {
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    };

    fetchMovies();
  }, [query, movietype, currentPage, setLoading]);

  return (
    <>
      <div className="movies-list">
        {loading ? 'Loading...' : 
          moviedata.map((movie, index) => (
            <MovieCard 
              key={index}
              id={movie.id}
              title={movie.original_title}
              posterUrl={movie.backdrop_path}
              rating={movie.vote_average}
            />
          ))
        }
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
