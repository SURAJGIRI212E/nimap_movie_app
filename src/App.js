import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import MovieDetails from './components/MovieDetails.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <Router>
     
      <Navbar setQuery={setQuery} setLoading={setLoading} />
      <Routes>
        <Route
          path="/"
          element={<Home query={query} loading={loading} setLoading={setLoading} setQuery={setQuery}/>}
        />
        <Route
          path="/:type"
          element={<Home query={query} loading={loading} setLoading={setLoading} setQuery={setQuery}/>}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails  loading={loading} setLoading={setLoading} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
