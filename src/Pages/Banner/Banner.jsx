import React from 'react';
import { Link } from 'react-router';
import bannerImage from '../../assets/hero.png'

const Banner = () => {
     return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
     
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/games"
            target='_blank'
            className="border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
          >
            Google Play
          </a>

          <a
          target='_blank'
             href="https://www.apple.com/app-store"
            className="border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
          >
            App Store
          </a>
        </div>

        
        <div className="mt-12 flex justify-center">
          <img
            src={bannerImage} 
            alt="App Showcase"
            className="w-full max-w-md md:max-w-xl"
          />
        </div>
      </div>

     
      <div className=" bg-gradient-to-r from-purple-500 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8 px-6">

          <div>
            <h2 className="text-4xl font-bold">29.6M</h2>
            <p className="text-sm mt-1">Total Downloads</p>
            <p className="text-xs opacity-80 mt-1">21% More Than Last Month</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">906K</h2>
            <p className="text-sm mt-1">Total Reviews</p>
            <p className="text-xs opacity-80 mt-1">46% More Than Last Month</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">132+</h2>
            <p className="text-sm mt-1">Active Apps</p>
            <p className="text-xs opacity-80 mt-1">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;



