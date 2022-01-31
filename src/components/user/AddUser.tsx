import { SyntheticEvent, useState } from 'react';

import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import ErrorModal from '@components/ui/ErrorModal';
import { User } from '@models/User';

type AddUserProps = {
  onAddUser: (user: User) => void;
};

const AddUser = ({ onAddUser }: AddUserProps) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState<{
    title: string;
    message: string;
  } | null>();

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!name.trim() || !age.trim()) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }

    onAddUser({ id: Math.random().toString(), name, age: +age });
    setName('');
    setAge('');
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className='input'>
        <form onSubmit={addUserHandler}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
