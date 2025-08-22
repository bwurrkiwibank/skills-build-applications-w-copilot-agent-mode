import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
        console.log('API endpoint:', API_URL);
      });
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(a => (
          <li key={a.activity_id}>{a.type} - {a.duration} min - {a.calories} cal</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
