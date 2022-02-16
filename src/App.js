import React, { useState } from 'react';
import Nasa from './Nasa';
import { apiKey } from './config';
import styles from './index.module.scss';

const App = () => {
  const [value, setValue] = useState('');
  const [nasaData, setNasaData] = useState({});

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleValueSearch = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${value}?api_key=${apiKey}`);
      const data = await response.json();
      await setNasaData(data);
    } catch (error) {
      console.error(error)
    }
  };

  const handleRandomSearch = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`);
      const data = await response.json();
      await setNasaData(data);
    } catch (error) {
      console.error(error)
    }
  };

  console.log(nasaData, 'nasaData');

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        type='text'
      />
       <button
        className={styles.button}
        disabled={value === ''}
        onClick={handleValueSearch}
      >
        Search with data
      </button>
       <button
        className={styles.button}
        onClick={handleRandomSearch}
      >
        Random search
      </button>
      {Object.keys(nasaData).length > 0 && <Nasa {...nasaData} />}
    </div>
  );
}

export default App;
