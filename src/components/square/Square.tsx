interface Props {
  number: number;
}

const Square = ({ number }: Props) => {
  return <button className="border text-xl w-8">{number}</button>;
};

export default Square;
