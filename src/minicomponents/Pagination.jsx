import React,{useEffect, useState,} from 'react';
import './Pagination.css'
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";


const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const [totalVisiblePages, setTotalVisiblePages] = useState(9);
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

 
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 480) {
            setTotalVisiblePages(3);
          } else if (window.innerWidth <= 768) {
            setTotalVisiblePages(5);
          } else {
            setTotalVisiblePages(9);
          }
          
        };
        window.addEventListener('resize', handleResize);
        handleResize(); 
    
       
      }, [totalVisiblePages]);
    const getVisiblePages = () => {
        const halfVisiblePages = Math.floor(totalVisiblePages / 2);
        let start = Math.max(1, currentPage - halfVisiblePages);
        let end = Math.min(totalPages, currentPage + halfVisiblePages);

        if (currentPage <= halfVisiblePages) {
            end = Math.min(totalPages, totalVisiblePages);
        } else if (currentPage + halfVisiblePages >= totalPages) {
            start = Math.max(1, totalPages - totalVisiblePages + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="pagination">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                <IoIosArrowBack/>
            </button>

            {visiblePages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? 'active' : ''}
                >
                    {pageNumber}
                </button>
            ))}
            <h3>{visiblePages[visiblePages.length-1]!==totalPages?'...':''}</h3>

            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                <MdNavigateNext/>
            </button>
        </div>
    );
};

export default Pagination;

