import "./styles.css";
import TableCompPaginated from "./TableCompPaginated";
import TableComp from "./TableComp";
import TableCompReactWindow from "./TableCompReactWindow";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=1000");
      const res = await response.json();
      setData(res.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Rendering 1000 data</h1>
      {data && (
        <>
          <h2>React Window Table</h2>
          <br />
          <TableCompReactWindow data={data} />
          <br />
          <h2>Paginated Table</h2>
          <br />
          <TableCompPaginated data={data} />
          <br />
          <h2>Normal Table</h2>
          <br />
          <TableComp data={data} />
        </>
      )}
    </div>
  );
}
