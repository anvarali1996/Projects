// import React, { useState } from 'react';
// import axios from 'axios';

// const App: React.FC = () => {
//   const [weather, setWeather] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [city, setCity] = useState('Tashkent');
//   const [inputValue, setInputValue] = useState('');

//   const fetchWeather = async (city: string) => {
//     try {
//       setLoading(true);
//       const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
//         params: {
//           q: city,
//           appid: import.meta.env.VITE_OPENWEATHERMAP_API_KEY,
//           units: 'metric',
//         },
//       });
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch weather data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       setCity(inputValue);
//       fetchWeather(inputValue);
//       setInputValue('');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Weather App</h1>
//       <form onSubmit={handleSearch} className="mb-4">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter city"
//           className="border p-2"
//         />
//         <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Search</button>
//       </form>
//       {loading && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {weather && (
//         <div className="flex flex-col items-center">
//           <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
//           <div className="text-2xl">{weather.main.temp}°C</div>
//           <div className="text-xl">{weather.weather[0].description}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState('Riga');
  const [inputValue, setInputValue] = useState('');

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: import.meta.env.VITE_OPENWEATHERMAP_API_KEY,
          units: 'metric',
        },
      });
      setWeather(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
      fetchWeather(inputValue);
      setInputValue('');
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city"
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weather && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <div className="text-2xl">{weather.main.temp}°C</div>
          <div className="text-xl">{weather.weather[0].description}</div>
          {weather.main.temp >= 30 && (<div className="text-xl text-blue-500 mt-4">PLEASE BE CAREFUL</div>)}
          {weather.weather[0].description.toLowerCase().includes('rain') && (
            <div className="text-xl text-blue-500 mt-4">Please take an umbrella</div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
