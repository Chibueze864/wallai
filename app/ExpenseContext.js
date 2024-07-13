"use client";

// ExpenseContext.js
import React, { createContext, useContext } from 'react';

const ExpenseContext = createContext(null);

export const useExpenseData = () => useContext(ExpenseContext);

export default ExpenseContext;
