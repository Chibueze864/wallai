'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "../../public/components/Navbar"
import Footer from "../../public/components/Footer"
import ProductButton from './modalButton';
import ExpenseWrapper from '../ExpenseWrapper';
import {transactionData} from "./data";
import { useRouter } from 'next/router';
import Recommend from "./recommendButton";
import { useExpenseData } from '../ExpenseContext'; // Adjust the import path as necessary
import AuthWrapper from '../AuthWrapper';



const Budget =  () => {
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
        try{
          const fetchedData = await response.json();
          setData(fetchedData);
          console.log(fetchedData);
        }catch{
          setData([])
        }

      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  
  
  return (
    <AuthWrapper>

       <div className="flex flex-col min-h-screen">
      <Navbar />
    <div className="container mx-auto  lg:px-12 py-8" style={{padding:"8vh 4vw  "}}>
      <div className="flex items-center justify-between mb-4" style={{marginBottom:"8vh"}}>
        <h2 className="text-xl font-bold text-gray-800">Budget</h2>
        <ProductButton />
      </div>

      <div style={{marginBottom:"8vh"}} className="bg-orange-200 mb-10 p-6 rounded-lg shadow">
        <div className="md:flex">
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">AI-powered Budget Analysis</h2>
            <p className="text-gray-700 mb-4">Analyze income and past spending patterns
            </p>
         
            <p className="text-gray-700 mb-4">
                Recommend savings goals based on financial situation
            </p>
            <p className="text-gray-700 mb-4">
                Suggest adjustments to avoid overspending
            </p>
         
            <Recommend data={data} />
          </div>
          <div className="md:w-1/2">
            {/* SVG content */}
            {/* ... (SVG code omitted for brevity) ... */}
          </div>
        </div>
      </div>

      <div style={{marginBottom:"8vh"}} className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Transactions</h2>
        <a href="#" className="text-gray-800 hover:text-gray-500 font-medium">View all</a>
      </div>

      <div style={{marginBottom:"8vh"}} className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">S/N</th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Name</th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Date</th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs text-right">Amount</th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Category</th>
            </tr>
          </thead>
           <tbody>
            { Array.isArray(data)  && data?.map(( transaction, index) => (
              <tr key={transaction?.id} className="focus-within:bg-gray-200 overflow-hidden">
                <td className="border-t">
                  <span className="text-gray-700 px-6 py-4 flex items-center">{index+1}</span>
                </td> 
                <td className="border-t">
                  <span className="text-gray-700 px-6 py-4 flex items-center">{transaction?.name}</span>
                </td> 
                <td className="border-t">
                  <span className="text-gray-700 px-6 py-4 flex items-center">{transaction?.date}</span>
                </td> 
                <td className="border-t">
                  <span className="text-gray-700 px-6 py-4 flex items-center justify-end">{transaction?.amount}</span>
                </td> 
                <td className="border-t">
                  <span className="px-6 py-4 flex items-center">
                    <span className={`px-2 rounded-full text-sm uppercase tracking-wide font-semibold ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-orange-200 text-orange-800'
                    }`}>
                      {transaction?.status}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>



        <Footer />
      </div>
    </AuthWrapper>

  );
};

export default Budget;
