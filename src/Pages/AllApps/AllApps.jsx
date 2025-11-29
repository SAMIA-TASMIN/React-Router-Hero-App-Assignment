import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppTiles from "../../Components/AppTiles/AppTiles";

const AllApps = () => {
  const data = useLoaderData();

  const [search,setSearch] =useState('')

  const filtered = data.filter(app=>  app.title?.toLowerCase().includes(search.toLowerCase()))
 


  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center my-4">
        <h1 className="text-6xl font-bold">Our All Application</h1>
        <p className="max-w-2xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          doloremque voluptatibus. Maxime sapiente sed fugiat ab eius. Modi,
          adipisci ipsa?
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Application..."
          className="border px-4 py-2 rounded-md w-64"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 container mx-auto ">
        {filtered.length===0?(<p>data not found</p>):filtered.map((app,idx) => (
          <AppTiles key={idx} app={app}></AppTiles>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
