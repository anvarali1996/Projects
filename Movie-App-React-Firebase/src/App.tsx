// src/App.tsx
// import React from 'react';
import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ProductPage from './components/ProductPage';
import Welcome from './components/Welcome';
import AccountDetails from './components/AccountDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
// import Newone from './components/Newone';
import Home from './components/Home';
import NotFound from './components/NotFound';
import RouteWrapper from './components/RouteWrapper';
import ProtectedRoute from './components/ProtectedRoute';
import SearchMovie from './components/SearchMovie';
import MovieSearch from './components/MovieSearch';
// import PopularMovies from './components/PopularMovies';



const App: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setExpanded(false);
    await auth.signOut();
    navigate('/signin');
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand as={Link} to="/">My Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ms-auto">
              
              {user ? (
              <ProtectedRoute>
                <>
                  <MovieSearch/>
                  <Nav.Link as={Link} to="/movies" onClick={() => setExpanded(false)}>Movies</Nav.Link>
                  <SearchMovie/>
                  <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)}>Profile</Nav.Link>
                  {/* <Nav.Link as={Link} to="/popular" onClick={() => setExpanded(false)}>Profile</Nav.Link> */}

                  {/* <Nav.Link as={Link} to='/new' onClick={() => setExpanded(false)}>New one</Nav.Link> */}
                  {/* <Button variant="outline-secondary" onClick={handleSignOut}>Sign Out</Button> */}
                  {/* <Button className='btn btn-danger' onClick={handleSignOut}>Sign Out</Button> */}
                  <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
                  

                </>
                </ProtectedRoute>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin" onClick={() => setExpanded(false)}>Sign In</Nav.Link>
                  <Nav.Link as={Link} to="/signup" onClick={() => setExpanded(false)}>Sign Up</Nav.Link>
                </>
      
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        
        <Routes>
          <Route path="/" element={ user ? <Home /> : <SignIn/> } />
          <Route path="/signin" element={<RouteWrapper title="Sign in">  <SignIn /></RouteWrapper>} />
          <Route path="/signup" element={<RouteWrapper title="Sign Up"><SignUp /></RouteWrapper>} />
          <Route path="/forgot-password" element={<RouteWrapper title='Reset Password'><ForgotPassword /></RouteWrapper> } />

          
          <Route path="/movies" element={<ProtectedRoute><RouteWrapper title='Movie list'><ProductPage /></RouteWrapper></ProtectedRoute> } />
          <Route path="/welcome" element={<ProtectedRoute><RouteWrapper title={`Welcome ${user?.displayName || user}`}><Welcome /></RouteWrapper></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><RouteWrapper title='Profile details'><AccountDetails /></RouteWrapper></ProtectedRoute>} />
          

          {/* <Route path="/popular" element={<RouteWrapper title='Profile details'><PopularMovies /></RouteWrapper>} /> */}

          {/* <Route path='/new' element={<Newone />} /> */}
          <Route path='*' element={<RouteWrapper title='Page Not Found'><NotFound/></RouteWrapper>}/>
        </Routes>
       
      </Container>
    </div>
  );
};

export default App;
