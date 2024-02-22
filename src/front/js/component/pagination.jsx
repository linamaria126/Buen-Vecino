import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-end mt-4">
            <button
                className="px-3 py-1 mx-1 bg-gray-200 rounded-md"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <span className="px-3 py-1 mx-1">{currentPage} of {totalPages}</span>
            <button
                className="px-3 py-1 mx-1 bg-gray-200 rounded-md"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </div>
    )
}

export default Pagination;