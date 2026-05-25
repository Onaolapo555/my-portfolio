

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // This function will be used from other pages
  window.openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
    document.body.style.overflow = 'visible';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-9999"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-[90%] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Close Button */}
            <button
              onClick={closeModal}
              className="fixed top-[30%] right-6 sm:opacity-0  text-white hover:text-red-700 p-3 shadow-2xl z-50"
            >
              <FaTimes size={24} />
            </button>

            {/* Centered Image */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;