import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../utility/addToDB";
import InstalledCard from "../InstalledCard/InstalledCard";

const Installation = () => {
  const [app, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const data = useLoaderData();

  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const storedApps = getStoredApps();
    const convertedStoredApps = storedApps.map((id) => parseInt(id));
    const myApps = data.filter((app) => convertedStoredApps.includes(app.id));
    setApps(myApps);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedApps = [...app];
    
    if (order === "lowToHigh") {
      sortedApps.sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));
    } else if (order === "highToLow") {
      sortedApps.sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
    }
    
    setApps(sortedApps);
  };

  const handleUninstall = () => {
    loadInstalledApps(); 
  };

  return (
    <div>
      <div className="container flex justify-between mx-auto my-3">
        <div className="text-2xl font-semibold"> {app.length} Apps Found </div>
        <details className="dropdown dropdown-end">
          <summary className="btn m-1">Sort by Downloads</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
            <li>
              <a onClick={() => handleSort("lowToHigh")}>Low to High</a>
            </li>
            <li>
              <a onClick={() => handleSort("highToLow")}>High to Low</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="container mx-auto">
        {app.map((a) => (
          <InstalledCard key={a.id} a={a} onUninstall={handleUninstall} />
        ))}
      </div>
    </div>
  );
};

export default Installation;