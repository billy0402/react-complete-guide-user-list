import { useState } from 'react';

import AddUser from '@components/user/AddUser';
import UserList from '@components/user/UserList';
import { User } from '@models/User';

const App = () => {
  const [users, setUsers] = useState([] as User[]);

  const addUserHandler = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
};

export default App;
