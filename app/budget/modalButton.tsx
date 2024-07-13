'use client';

import { useState } from 'react';
import ProductModal from './modal';

const ProductButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="shadow inline-flex items-center  bg-gray-800 hover:bg-gray-500 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add Item
      </button>
      
      
      <ProductModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProductButton;