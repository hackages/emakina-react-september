import React from 'react';
import users from '../mocks/users.json';

// TODO 1:
// Extract the <User /> component from the <App /> component
// hint: it starts at <p>

// TODO 2:
// In the App component map over the first 50 users and return a list <User />

// TODO 3:
// Make sure your console is free of error/warnings

// TODO 4:
// Use propTypes to validate the props of the User component
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <ul>
        <li>
          <p
            style={{
              color: users[0].gender === 'F' ? 'pink' : 'blue'
            }}
          >
            <img
              alt={`Avatar of ${users[0].firstName} ${users[0].lastName}`}
              src={users[0].avatar}
            />
            {`${users[0].firstName} ${users[0].lastName} is a/an ${users[0].jobTitle}`}
          </p>
        </li>
      </ul>
    </div>
  );
};
