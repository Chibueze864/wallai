'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import path

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    
    const fetchData = async () => {
      try {
        const response = await fetch("https://wallai-server.vercel.app/expenses/", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`, // Replace with actual token retrieval logic
          },
        });

        if (!response.ok) {
            router.push('/register');

        }

        // If we reach this point, the API call succeeded
        // No need to redirect
      } catch (error: any) {
        console.error(error.message); // Log the error for debugging purposes
        // Redirect to /register if the API call failed
        router.push('/register');
      }
    };

    fetchData();
  }, [router]);

  return <>{children}</>;
};

export default AuthWrapper;
