import { BiInfoCircle } from 'react-icons/bi';

function InfoMessage({ message }) {
  return (
    <div className="text-orange-600 font-bold flex items-center justify-center">
      <BiInfoCircle />
      <p className="">{message}</p>
    </div>
  );
}
export default InfoMessage