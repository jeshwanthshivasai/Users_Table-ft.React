import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [headings, setHeadings] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        if (data.length > 0) {
          const firstUserKeys = Object.keys(data[0]).slice(0, 4);
          setHeadings(firstUserKeys);
        }
      });
  }, []);

  return (
    <div className="container">
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading.charAt(0).toUpperCase() + heading.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {headings.map((heading, index) => (
                <td key={index}>{user[heading]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;