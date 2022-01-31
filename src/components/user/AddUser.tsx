import { SyntheticEvent } from 'react';

import Button from '@components/ui/Button';
import Card from '@components/ui/Card';

const AddUser = () => {
  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
