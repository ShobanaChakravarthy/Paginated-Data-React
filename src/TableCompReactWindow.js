import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";

const Row = ({ index, style, data }) => {
  const user = data[index];
  return (
    <div
      style={{
        ...style,
        display: "flex",
        padding: "10px 4px 0px 4px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ flex: 1 }}>{user.name.first}</div>
      <div style={{ flex: 1 }}>{user.name.last}</div>
      <div style={{ flex: 2 }}>{user.email}</div>
    </div>
  );
};

const TableComp = ({ data }) => {
  if (data.length === 0) return <p>Loading...</p>;
  return (
    <>
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          padding: "5px",
          borderBottom: "2px solid black",
        }}
      >
        <div style={{ flex: 1 }}>First Name</div>
        <div style={{ flex: 1 }}>Last Name</div>
        <div style={{ flex: 2 }}>Email</div>
      </div>
      <FixedSizeList
        height={600}
        itemCount={data.length}
        itemSize={40}
        width={"100%"}
        itemData={data}
      >
        {Row}
      </FixedSizeList>
    </>
  );
};

export default TableComp;
