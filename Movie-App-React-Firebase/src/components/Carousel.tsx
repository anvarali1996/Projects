
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Carousel.css'; // Custom styles

interface CarouselProps {
  images: string[];  
}

const MovieCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [loading, setLoading] = useState(true);

 
  const getImageUrl = (imageUrl: string) => {
    
    if (imageUrl.startsWith('https://image.tmdb.org/t/p/')) {
      
      return imageUrl.replace(/w\d+/, 'w1280'); 
    }

    
    return `https://image.tmdb.org/t/p/w1280${imageUrl}`;
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Images */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {loading && <div className="loading-spinner">Loading...</div>} {/* Loading Spinner */}
            <img
              src={getImageUrl(image)}  
              className="d-block w-100 carousel-image"
              alt={`Slide ${index}`}
              onLoad={() => setLoading(false)} // 
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieCarousel;





// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style/Carousel.css"; // Add styles if needed

// interface CarouselProps {
//   images: string[]; // Array of image paths like "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg"
// }

// const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original"; // or "w1280" for high-quality images

// const MovieCarousel: React.FC<CarouselProps> = ({ images }) => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//       {/* Carousel Indicators */}
//       <div className="carousel-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             aria-current={index === 0 ? "true" : undefined}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>

//       {/* Carousel Items */}
//       <div className="carousel-inner">
//         {images.map((imagePath, index) => (
//           <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//             {loading && <div className="loading-spinner">Loading...</div>} {/* Loading Spinner */}
//             <img
//               src={`${BASE_IMAGE_URL}${imagePath}`} // Only prepend the base URL to the relative image path
//               className="d-block w-100 carousel-image"
//               alt={`Slide ${index}`}
//               onLoad={() => setLoading(false)} // Hide spinner after image loads
//               loading="lazy" // Lazy loading for better performance
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default MovieCarousel;
