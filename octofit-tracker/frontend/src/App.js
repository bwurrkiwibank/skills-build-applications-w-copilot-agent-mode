import React from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState([]);
  const [teams, setTeams] = React.useState([]);
  const [activities, setActivities] = React.useState([]);
  const [workouts, setWorkouts] = React.useState([]);
  const [leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/users/').then(res => setUsers(res.data));
    axios.get('/api/teams/').then(res => setTeams(res.data));
    axios.get('/api/activities/').then(res => setActivities(res.data));
    axios.get('/api/workouts/').then(res => setWorkouts(res.data));
    axios.get('/api/leaderboard/').then(res => setLeaderboard(res.data));
  }, []);

  return (
    <div style={{padding: '2rem'}}>
      <h1>Octofit Tracker Dashboard</h1>
      <section>
        <h2>Users</h2>
        <ul>{users.map(u => <li key={u.user_id}>{u.name} ({u.email})</li>)}</ul>
      </section>
      <section>
        <h2>Teams</h2>
        <ul>{teams.map(t => <li key={t.team_id}>{t.name}</li>)}</ul>
      </section>
      <section>
        <h2>Activities</h2>
        <ul>{activities.map(a => <li key={a.activity_id}>{a.type} - {a.duration} min - {a.calories} cal</li>)}</ul>
      </section>
      <section>
        <h2>Workouts</h2>
        <ul>{workouts.map(w => <li key={w.workout_id}>{w.name}: {w.description}</li>)}</ul>
      </section>
      <section>
        <h2>Leaderboard</h2>
        <ul>{leaderboard.map(l => <li key={l.leaderboard_id}>{l.team_id}: {l.points} pts</li>)}</ul>
      </section>
    </div>
  );
}

export default App;
