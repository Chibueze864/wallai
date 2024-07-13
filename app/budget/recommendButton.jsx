'use client';

import { useState } from 'react';
import ProductModal from './recommendModal';

const Recommend = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(data)

  return (
    <>
      <button onClick={openModal} className="shadow inline-flex items-center  bg-gray-800 hover:bg-gray-500 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg">
        Recommend Goals

      </button>


      <ProductModal isOpen={isModalOpen} onClose={closeModal}  />
    </>
  );
};

export default Recommend;
