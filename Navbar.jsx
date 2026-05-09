import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#14151f] shadow-lg' : 'bg-[#1a1a24]'} border-b border-white/5 h-16 flex items-center`}>
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo & Main Nav */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <Gamepad2 className="w-6 h-6 text-[#ff5722]" />
              <span className="text-xl font-heading font-black tracking-wider text-white">
                GAME<span className="text-[#ff5722]">FORGE</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className={`text-sm font-medium hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`}>Home</Link>
              <Link to="/explore" className={`text-sm font-medium hover:text-white transition-colors ${location.pathname === '/explore' ? 'text-white' : 'text-gray-400'}`}>Categories</Link>
              <Link to="/competitions" className={`text-sm font-medium hover:text-white transition-colors ${location.pathname === '/competitions' ? 'text-white' : 'text-gray-400'}`}>Competitions</Link>
              <Link to="/ai-tools" className={`text-sm font-medium hover:text-white transition-colors ${location.pathname === '/ai-tools' ? 'text-white' : 'text-gray-400'}`}>AI Tools</Link>
              <Link to="/upload" className={`text-sm font-medium hover:text-white transition-colors ${location.pathname === '/upload' ? 'text-white' : 'text-gray-400'}`}>Upload</Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearch} className="w-full relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-[#2a2a36] border border-[#3f3f50] rounded-full py-1.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors placeholder-gray-400"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/profile" className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-[#ff5722] transition-all">
              <User className="w-5 h-5 text-gray-600" />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full md:hidden bg-[#1a1a24] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <form onSubmit={handleSearch} className="relative mb-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-[#2a2a36] border border-[#3f3f50] rounded-full py-2 pl-4 pr-10 text-sm text-white focus:outline-none"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-4 h-4" />
                </button>
              </form>
              <Link to="/" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/explore" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
              <Link to="/competitions" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Competitions</Link>
              <Link to="/ai-tools" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>AI Tools</Link>
              <Link to="/upload" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Upload</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
