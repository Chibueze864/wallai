'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('https://wallai-server.vercel.app/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log('Registration successful');
        // Redirect to login
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter Email Address" 
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            placeholder="Enter Password"  
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full block bg-gray-800 hover:bg-gray-500 rounded-lg text-white font-semibold rounded-lg px-4 py-3 mt-6"
        >
          Register
        </button>
      </form>
      <div className="text-sm flex justify-between items-center mt-3">
        <p>If you have an account...</p>
        <Link href="/login" className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400">
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;