
import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { updateProfile } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AccountDetails: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      const [firstName, ...lastName] = user.displayName?.split(' ') || ['', ''];
      setName(firstName);
      setSurname(lastName.join(' '));
      setEmail(user.email || '');
    }
    
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      await updateProfile(user!, {
        displayName: `${name} ${surname}`,
      });
      setMessage('Profile updated successfully!');
    } catch (error: any) {
      setMessage('An error occurred. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Account Details</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            style={{ cursor: "not-allowed" }}
            type="email"
            className="form-control bg-light text-muted"
            value={email}
            readOnly
          />
          <p className="text-muted">
                Your email address cannot be updated!
              </p>
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default AccountDetails;

