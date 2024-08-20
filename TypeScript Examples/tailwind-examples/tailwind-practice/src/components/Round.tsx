import React, { useRef, useState, useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Round: React.FC<PaginationProps> = ({ totalItems, itemsPerPage }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (paginationRef.current) {
      paginationRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (paginationRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - paginationRef.current.offsetLeft);
      setScrollLeft(paginationRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging && paginationRef.current) {
      e.preventDefault();
      const x = e.pageX - paginationRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      paginationRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (paginationRef.current) {
      const pageButtons = paginationRef.current.querySelectorAll('button');
      const currentButton = pageButtons[currentPage - 1];
      if (currentButton) {
        currentButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      }
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col h-screen space-y-4">
      <div
        onClick={handleClick}
        className={`relative bg-blue-700 rounded-full cursor-pointer m-10 transition-[width] duration-[10ms] ease-in-out transform translate-x-0 
          ${isExpanded ? "min-w-max" : "w-24"} h-24`}
      >
        <h1 className="m-10 text-white text-lg">
          {isExpanded
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            : "?"}
        </h1>
      </div>

      <h1 className="text-center font-bold text-[40px]">Page Number: {currentPage}</h1>

      {/* Pagination */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center space-x-2 mb-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div
            ref={paginationRef}
            className="flex space-x-1 h-14 w-96 overflow-x-auto"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              .scrollable-container::-webkit-scrollbar {
                display: none; /* Hide scrollbar for WebKit browsers */
              }
            `}</style>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md ${
                  page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
                } hover:bg-blue-400`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Round;
