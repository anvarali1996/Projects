
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 

    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
     
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      
      await updateProfile(userCredential.user, {
        displayName: `${name} ${surname}`,
      });

      
      const userDoc = doc(db, "users", userCredential.user.uid); 
      await setDoc(userDoc, {
        userName: name,
        userSurname: surname,
        userEmail: email,
      });

      setSuccess(true);
      setTimeout(() => {
        navigate("/welcome"); 
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">You have successfully signed up.</div>}
      {!success && (
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
