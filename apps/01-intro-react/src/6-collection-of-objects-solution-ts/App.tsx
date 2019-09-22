import React, {FC} from 'react';
import users from '../mocks/users.json';

interface User {
  avatar: string;
  firstName: string;
  gender: string;
  guid: string;
  jobTitle: string;
  lastName: string;
}

const User: FC<User> = ({gender, firstName, lastName, avatar, jobTitle}) => (
  <p
    style={{
      color: gender === 'F' ? 'pink' : 'blue'
    }}
  >
    <img alt={`Avatar of ${firstName} ${lastName}`} src={avatar} />
    {`${firstName} ${lastName} is a/an ${jobTitle}`}
  </p>
);

export const App: FC = () => {
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
          {users.slice(0, 50).map((user: User) => (
            <User {...user} key={user.guid} />
          ))}
        </li>
      </ul>
    </div>
  );
};
