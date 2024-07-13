import React, { useState, useEffect } from 'react';

interface FinancialAnalysis {
  income_analysis: string;
  spending_analysis: string;
  savings_recommendations: string;
  overspending_adjustments: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose }) => {
  const [analysis, setAnalysis] = useState<FinancialAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchAnalysis();
    }
  }, [isOpen]);

  const fetchAnalysis = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await fetch('https://wallai-server.vercel.app/analyze-finances/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch analysis');
      }
      const data: FinancialAnalysis = await response.json();
      Object.keys(data).forEach(key => {
        data[key as keyof FinancialAnalysis] = data[key as keyof FinancialAnalysis]
          .replace(/##/g, '')
          .replace(/\*\*/g, '');
      });
      setAnalysis(data);
    } catch (error) {
      console.error('Error fetching analysis:', error);
      setError('Error fetching financial analysis. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center">
      <div className="relative p-4 w-full max-w-2xl">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Financial Recommendations
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {isLoading ? (
            <p className="text-center text-white">Loading financial analysis...</p>
          ) : error ? (
            <p className="text-center text-white">{error}</p>
          ) : analysis ? (
            <div className="space-y-4">
              <section>
                <h4 className="text-md text-white font-semibold">Income and Spending Analysis</h4>
                <p className="text-sm text-white">{analysis.income_analysis}</p>
              </section>
              <section>
                <h4 className="text-md text-white font-semibold">Savings Recommendations</h4>
                <p className="text-sm text-white">{analysis.savings_recommendations}</p>
              </section>
              <section>
                <h4 className="text-md text-white font-semibold">Overspending Adjustments</h4>
                <p className="text-sm text-white">{analysis.overspending_adjustments}</p>
              </section>
            </div>
          ) : (
            <p className="text-center text-white">No analysis data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;