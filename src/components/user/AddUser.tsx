import { SyntheticEvent, useState } from 'react';

import Button from '@components/ui/Button';
import Card from '@components/ui/Card';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!username.trim() || !age.trim()) {
      return;
    }
    if (+age < 1) {
      return;
    }

    console.log(username, age);
    setUsername('');
    setAge('');
  };

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={age} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
