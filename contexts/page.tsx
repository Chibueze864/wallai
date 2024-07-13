import type { GetServerSideProps } from 'next';

interface PageProps {
  expenses: any[];
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  try {
    const accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://wallai-server.vercel.app/expenses/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const expenses = await response.json();
    return { props: { expenses } };
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return { props: { expenses: [] } };
  }
};
