import React, { useEffect, useState } from "react";

const TableComp = () => {
  const [data, setData] = useState([]);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=1000");
      const res = await response.json();
      setData(res.results);
    }
    fetchData();
  }, []);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const RenderPageButtons = () => {
    const pageNumbers = [];
    const maxVisiblePage = 7;
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePage / 2), 1);
    let endPage = startPage + maxVisiblePage;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((page) => (
      <button key={page} onClick={() => handlePageChange(page)}>
        {page}
      </button>
    ));
  };
  if (data.length === 0) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ marginTop: "16px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <RenderPageButtons />
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComp;
