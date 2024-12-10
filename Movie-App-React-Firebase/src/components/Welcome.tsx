
import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);

  // const handleSignOut = async () => {
  //   await signOut(auth);
  //   navigate('/signin');
  // };

  return (
    <div className="container mt-5">
      <h2>Welcome{displayName && `, ${displayName}`}</h2>
      {/* <button className="btn btn-primary mt-3" onClick={handleSignOut}>Sign Out</button> */}
    </div>
  );
};

export default Welcome;
