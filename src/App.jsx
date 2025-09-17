import React, { useEffect, useState } from "react";
import Routes from "./Routes";

function App() {
  const [dbStatus, setDbStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/db-health")  // backend endpoint
      .then((res) => res.json())
      .then((data) => setDbStatus(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <>
      <Routes />
      <div className="p-4">
        <h2 className="text-lg font-bold">DB Health Check</h2>
        <pre>{JSON.stringify(dbStatus, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
