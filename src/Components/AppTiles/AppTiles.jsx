

const AppTiles = ({app}) => {
    const {title,id,image}=app;
   return (
    <div className="w-75 my-2 bg-white rounded-xl shadow-md p-3">
      {/* Image Box */}
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
        {/* এখানে তুমি img বসাবে */}
        {/* <img src="/your-image.png" alt="app" className="w-full h-full rounded-lg object-cover" /> */}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-3">
        {title}
      </h3>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        {/* Left Download Count */}
        <div className="flex items-center space-x-1 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md">
          {/* Icon image or react-icon */}
          {/* <img src="/download.png" className="w-3 h-3" /> */}
          <span>9M</span>
        </div>

        {/* Right Rating */}
        <div className="flex items-center space-x-1 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-md">
          {/* <img src="/star.png" className="w-3 h-3" /> */}
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default AppTiles;

