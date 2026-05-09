import { Search, Filter, Star, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Explore = () => {
  const categories = ['All', 'Action', 'Racing', 'Horror', 'Puzzle', 'Multiplayer'];
  
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0 space-y-8">
          <div className="card-glass p-5">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat, i) => (
                <button 
                  key={cat} 
                  className={`text-left px-3 py-2 rounded-lg transition-colors text-sm ${i === 0 ? 'bg-primary/20 text-primary font-medium' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="Search for games, creators, or tags..." 
              className="w-full bg-surface border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-6 rounded-lg text-sm">
              Search
            </button>
          </div>

          {/* Game Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: item * 0.05 }}
                key={item} 
                className="card-glass group cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="relative h-40 overflow-hidden bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                  <div className="absolute top-3 right-3 z-20 bg-background/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-3 h-3 text-highlight fill-highlight" />
                    <span className="text-xs font-bold">{4.0 + (item * 0.1)}</span>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Game Title {item}</h3>
                  <p className="text-xs text-gray-400 mb-3 flex-grow">DeveloperName</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-1 bg-surface rounded-md text-gray-300">Action</span>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-white transition-colors">
                      <Play className="w-3 h-3 fill-current" /> PLAY
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
