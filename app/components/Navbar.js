export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md z-50">
        
        <h1 className="text-xl font-bold text-white">
          Hari Prakash
        </h1>
  
        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
  
      </nav>
    );
  }