import { Link, NavLink } from 'react-router';
import image from '../../assets/logo.png'
const Navbar = ({ title = "NeXtAPP" }) => {
     return (
    <header className="bg-white shadow-sm  w-full z-40 mb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center relative">

          {/* LEFT: logo + title */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={image}
              alt={title}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-lg text-gray-800">{title}</span>
          </div>

          {/* CENTER */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">
          <p  className="text-gray-700 hover:text-blue-600 font-medium">Home</p>
          </NavLink>
            
            <NavLink to="/allapps"><p  className="text-gray-700 hover:text-blue-600 font-medium">Apps</p></NavLink>
            <NavLink to="/installation"><p  className="text-gray-700 hover:text-blue-600 font-medium">Installation</p></NavLink>
          </nav>

          {/* RIGHT + HAMBURGER */}
          <div className="ml-auto flex items-center space-x-3">
            <button className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
             Contribute
            </button>

            {/* Checkbox Hack */}
            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <div className="md:hidden bg-white border-t hidden peer-checked:block">
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link to={`/`}><p  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Home</p></Link>
         <NavLink> <p  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Apps</p></NavLink>
          <NavLink><p  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Installation</p></NavLink>
          <div className="pt-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
             Contribute
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





// export default function ResponsiveNavbar({ image = "/logo.png", title = "MySite" }) {

// }
