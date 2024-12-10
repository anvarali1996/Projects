
import React, { useEffect, useState } from 'react';
import MovieCarousel from '../components/Carousel';

import { fetchMovies } from '../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';


const db = getFirestore();


const auth = getAuth();
const user = auth.currentUser;  

if (user && user.uid) {
  
  const userRef = doc(db, "user", user.uid);  
  // 
  await setDoc(userRef, {
    displayName: user.displayName || "No Name", 
    email: user.email || "No Email", //
    photoURL: user.photoURL || null, 
    lastLogin: new Date(),           
  });
  
  console.log('User data saved to Firestore!');
} else {
  console.log('No user is signed in or UID is missing!');
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    getMovies(); 
    return () => unsubscribe(); 
  }, []);
  return (
    <div>
      <MovieCarousel images={movies.slice(0, 5).map(movie => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)} />
      <div className="container mt-4">
        <div>
      
        <div>
          <h1>Welcome, {user?.displayName || null}!</h1>
        </div>
     
    </div>
        <div className="row">
          {movies.map(movie => (
            <div key={movie.id} className="col-md-4 mb-4">
              {/* <MovieCard
                title={movie.title}
                posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import MovieCarousel from '../components/Carousel'; // Assuming this is correct
// // import MovieCard from '../components/MovieCard'; // Uncomment if needed
// import { fetchMovies } from '../services/movieService';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

// const Home: React.FC = () => {
//   const [movies, setMovies] = useState<any[]>([]);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         const moviesData = await fetchMovies(1); // Fetch first page of movies
//         setMovies(moviesData); // Set the movie data to state
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     getMovies(); // Fetch movies on component mount
//     return () => unsubscribe(); // Cleanup the listener when the component unmounts
//   }, []); // Empty dependency array means this runs once when component mounts

//   return (
//     <div>
//       <MovieCarousel
//         images={movies.slice(0, 5).map(
//           (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
//         )}
//       />
//       <div className="container mt-4">
//         <div>
//           <h1>Welcome, {user?.displayName || "Guest"}!</h1>
//         </div>
//         <div className="row">
//           {movies.map((movie) => (
//             <div key={movie.id} className="col-md-4 mb-4">
//               {/* Uncomment and customize MovieCard if needed */}
//               {/* <MovieCard
//                 title={movie.title}
//                 posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               /> */}
//               <div>
//                 <h3>{movie.title}</h3>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   style={{ width: "100%" }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
