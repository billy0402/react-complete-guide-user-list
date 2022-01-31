type ButtonProps = {
  type?: 'button' | 'submit';
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <button className='button' type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
