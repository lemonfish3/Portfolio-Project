
function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold">
            Joy Yang
          </a>
          <div className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">
              Projects
            </a>
            <a href="#image_api" className="text-gray-700 hover:text-gray-900">
              Image API
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;