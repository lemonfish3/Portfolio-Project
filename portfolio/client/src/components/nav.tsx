
function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="px-3 py-1 text-gray-700 rounded-md text-xl font-bold hover:text-white hover:bg-blue-200">
            Joy Yang
          </a>
          <div className="space-x-2">
            <a href="#about" className="px-3 py-1 rounded-md text-gray-700 hover:text-white hover:bg-blue-200">
              About
            </a>
            <a href="#projects" className="px-3 py-1 rounded-md text-gray-700 hover:text-white hover:bg-blue-200">
              Projects
            </a>
            {/* <a href="#image_api" className="px-3 py-1 rounded-md text-gray-700 hover:text-white hover:bg-blue-200">
              Image API
            </a> */}
            {/* <a href="#contact" className="px-3 py-1 rounded-md text-gray-700 hover:text-white hover:bg-blue-200">
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;