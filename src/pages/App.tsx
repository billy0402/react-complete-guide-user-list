import AddUser from '@components/user/AddUser';
import UserList from '@components/user/UserList';

const App = () => {
  return (
    <>
      <AddUser />
      <UserList users={[]} />
    </>
  );
};

export default App;
