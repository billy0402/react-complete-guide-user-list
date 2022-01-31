type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
