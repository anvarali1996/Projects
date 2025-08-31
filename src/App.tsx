import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
// import './index.css';
const App: React.FC = () => {
  const [person, setPerson] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/data/data.json');
      const data = await response.json();
      setPerson(data[0]);
    };

    fetchData();
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-con'>
      <Navbar />
      <MainContent person={person} />
    </div>
  );
}

export default App;
