import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { games } from '../data/games';

const Home = () => {

  return (
    <div className="bg-[#14151f] min-h-screen pt-4 pb-12 w-full px-4 md:px-6">
      
      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="px-5 py-1.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
          News
        </button>
        <button className="px-5 py-1.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
          Popular
        </button>
        <button className="px-5 py-1.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
          Top rated
        </button>
        <button className="px-5 py-1.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
          A to Z
        </button>
      </div>

      {/* Grid of Games */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {games.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="block group relative rounded-lg overflow-hidden bg-[#1a1a24] hover:ring-2 ring-[#ff5722] transition-all">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {game.featured && (
                <div className="absolute top-2 right-2 text-right">
                  <div className="flex text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-white text-xs font-bold drop-shadow-md">{game.rating}</span>
                </div>
              )}
            </div>
            <div className="p-2 text-center border-t border-white/5">
              <h3 className="text-gray-300 text-xs md:text-sm font-medium truncate group-hover:text-white transition-colors">{game.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
