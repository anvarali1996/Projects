
import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { fetchMovies } from '../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  const handleCardClick = (movie: any) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Trending Movies</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-2">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="movie-card d-flex flex-column ml-5">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {movie.overview.slice(0, 100)}...
                </Card.Text>
                {/* <Card.Text>Released Date:{movie.release_date}</Card.Text> */}
                <Button
                  variant="primary"
                  onClick={() => handleCardClick(movie)}
                  className="mt-auto"
                >
                  See Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for movie details */}
      {selectedMovie && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex">
              <img
                src={`https://image.tmdb.org/t/p/w1280${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="img-fluid rounded"
                style={{ maxWidth: '250px', marginRight: '20px' }}
              />
              <div>
                <p>{selectedMovie.overview}</p>
                <p>Released Date: <b>{selectedMovie.release_date}</b></p>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Home;
