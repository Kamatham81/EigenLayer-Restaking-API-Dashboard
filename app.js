import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [restakers, setRestakers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/restakers')
      .then(res => setRestakers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Restakers Info</h1>
      <ul>
        {restakers.map((r, index) => (
          <li key={index}>
            User: {r.user} | Amount: {r.amount} | Validator: {r.validator}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;