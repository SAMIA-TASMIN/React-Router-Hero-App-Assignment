import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppTiles from "../../Components/AppTiles/AppTiles";
import AppError from "../../Components/AppError/AppError";

const AllApps = () => {
  const data = useLoaderData();

  const [search,setSearch] =useState('')

  const filtered = data.filter(app=>  app.title?.toLowerCase().includes(search.toLowerCase()))
 
const handleOnChange =e=>{
    e.preventDefault();
    setSearch(e.target.value)
}

  return (
    <div>
      {
        filtered.length>0?(<div className="text-center flex flex-col items-center justify-center my-4">
        <h1 className="text-6xl font-bold">Our All Application</h1>
        <p className="max-w-2xl mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>):("")
      }
      
    <div className="flex justify-between container mx-auto px-5">
        <p className="text-2xl font-semibold ">({filtered.length}) Data found</p>

        <form >
        <input
          type="text"
          name="search"
          defaultValue={search}     
          onChange={handleOnChange}
          placeholder="Search Application..."
          className="border px-4 py-2 rounded-md w-64 shadow"
        />
        </form>
    </div>
     

      {
        filtered.length===0?(<AppError></AppError>):(<div className="grid grid-cols-1 md:grid-cols-4 gap-2 container mx-auto">{filtered.map((app,idx)=><AppTiles key={idx} app={app}></AppTiles>)}</div>)
      }
    </div>
  );
};

export default AllApps;
