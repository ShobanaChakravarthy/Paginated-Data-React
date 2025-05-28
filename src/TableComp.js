import React from "react";

const TableComp = ({ data }) => {
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
          {data.map((item, index) => {
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
    </div>
  );
};

export default TableComp;
