import React from 'react';
import PropTypes from 'prop-types';
import users from '../mocks/users.json';

const User = ({gender, firstName, lastName, avatar, jobTitle}) => (
  <p
    style={{
      color: gender === 'F' ? 'pink' : 'blue'
    }}
  >
    <img alt={`Avatar of ${firstName} ${lastName}`} src={avatar} />
    {`${firstName} ${lastName} is a/an ${jobTitle}`}
  </p>
);

User.propTypes = {
  gender: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
};

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
          {users.slice(0, 50).map(user => (
            <User {...user} key={user.guid} />
          ))}
        </li>
      </ul>
    </div>
  );
};
