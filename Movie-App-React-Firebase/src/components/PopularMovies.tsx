// import React, { useState, useEffect } from 'react';
// import { fetchPopularMovies } from '../services/movieService';

// const PopularMovies: React.FC = () => {
//   const [popularMovies, setPopularMovies] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const movies = await fetchPopularMovies();
//       setPopularMovies(movies);
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Popular Movies</h2>
//       <div className="row">
//         {popularMovies.map(movie => (
//           <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//             <div className="card">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 <p className="card-text">{movie.overview.slice(0, 100)}...</p>
//                 <button className="btn btn-primary">Details</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularMovies;
