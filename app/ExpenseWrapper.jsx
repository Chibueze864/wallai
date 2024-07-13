"use client";
// ExpenseWrapper.js
import { useEffect, useState } from 'react';
import ExpenseContext from './ExpenseContext'; // Adjust the import path as necessary

const ExpenseWrapper = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        const response = await fetch('https://wallai-server.vercel.app/expenses/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      }
    };

    fetchData();
  }, []);

  return (
    <ExpenseContext.Provider value={data}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseWrapper;
