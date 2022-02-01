import { SyntheticEvent, useRef, useState } from 'react';

import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import ErrorModal from '@components/ui/ErrorModal';
import { User } from '@models/User';

type AddUserProps = {
  onAddUser: (user: User) => void;
};

const AddUser = ({ onAddUser }: AddUserProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<{
    title: string;
    message: string;
  } | null>();

  const addUserHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!nameInputRef.current || !ageInputRef.current) {
      setError({
        title: 'Invalid inputRef',
        message: 'nameInputRef or ageInputRef is not assigned',
      });
      return;
    }
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredName.trim() || !enteredAge.trim()) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }

    onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input id='name' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
