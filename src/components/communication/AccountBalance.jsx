import { useState, useEffect } from 'react';
import axios from 'axios';
import api_endpoint from '../../utils/config';

const AccountBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${api_endpoint}/api/balance`)
      .then((response) => {
       // setBalance(response.data);

       console.log(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Your SMS credits balance is: {11}</p>
      )}
    </div>
  );
};

export default AccountBalance;
