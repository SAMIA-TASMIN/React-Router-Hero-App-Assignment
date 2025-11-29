import React from "react";
import { useLoaderData, useParams } from "react-router";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const AppDetaill = () => {
  const { appId } = useParams();
  const appid = parseInt(appId);
  const apps = useLoaderData();
  const singleData = apps.find((app) => app.id === appid);
  const {
    companyName,
    description,
    downloads,
    id,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = singleData;
  const data = ratings;
  console.log(data);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto bg-white  rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 ">
        {/* Left Side App Icon */}
        <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-xl">
          <img src={image} alt="app icon" className="w-20 h-20" />
        </div>

        {/* Right Side Content */}
        <div className="flex-1">
          {/* App Title */}
          <h1 className="text-2xl font-bold">
            {title}
          </h1>
          <p className="text-gray-500 mt-1">
            Developed by :
            <span className="text-blue-500 font-medium cursor-pointer">
             {companyName}
            </span>
          </p>
          <hr className="text-gray-300 my-3" />
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 my-5">
            {/* Downloads */}
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 2h16v2H4v-2z" />
              </svg>
              <p className="text-2xl font-bold"> {downloads} </p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 19.897 4.665 24 6 15.602 0 9.748l8.332-1.593z" />
              </svg>
              <p className="text-2xl font-bold">{ratingAvg} </p>
              <p className="text-gray-500 text-sm">Average Ratings</p>
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 00-7.746 16.32L2 22l3.68-2.254A10 10 0 1012 2zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
              </svg>
              <p className="text-2xl font-bold"> {reviews} </p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>

          {/* Install Button */}
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
            Install Now {size} MB
          </button>
        </div>
      </div>

    

    <div className="max-w-7xl mx-auto">
        <hr />
        <h1 className="text-2xl font-semibold text-center my-3">Ratings</h1>
       <BarChart className=" max-w-6xl h-[300px] mx-auto my-9"
    //     width={500}
    // height={300}
    //   style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
     layout="vertical"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis  type="category" dataKey="name" width={100} />
      <XAxis type="number"/>
      
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      
    </BarChart>
    </div>


    <div className="max-w-7xl mx-auto mb-8">
        <hr className="my-8"/>
        {description}
    </div>

    </div>
  );
};

export default AppDetaill;



