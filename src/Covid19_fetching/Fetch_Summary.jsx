import React, { useEffect, useState } from 'react';

const Fetch_Summary= () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.rootnet.in/covid19-in/stats/history')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSummary(data.data);  
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Covid-19 Summary</h1>
      {summary && (
        <div>
          {summary.map((day, index=0) => (
            <div key={index}>
              {/* <h3>Date: {day.day}</h3> */}
              <p>Total Confirmed: {day.summary.total}</p>
              <p>Total Deaths: {day.summary.deaths}</p>
              <p>Confirmed Cases:{day.summary.confirmedCasesIndian}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default Fetch_Summary;
