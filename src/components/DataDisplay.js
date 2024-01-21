import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the JSON file
    const fetchData = async () => {
        try {
          const response = await fetch('/data.json');
          const text = await response.text(); // Get the text content of the response
          console.log('Response text:', text);
      
          const jsonData = JSON.parse(text);
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs only once (on mount)

  return (
    <div>
      <h1>Data Display</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
