import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="pagination-container">
      <Pagination>{items}</Pagination>
    </div>
  );
};

CustomPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
