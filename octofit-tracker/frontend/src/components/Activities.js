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
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-3">Activities</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(a => (
              <tr key={a.activity_id}>
                <td>{a.type}</td>
                <td>{a.duration}</td>
                <td>{a.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
