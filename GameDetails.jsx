import { useParams, Link } from 'react-router-dom';
import { Play, Share2, Heart, Flag, ArrowLeft } from 'lucide-react';
import { games } from '../data/games';

const GameDetails = () => {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
        <Link to="/" className="text-[#ff5722] hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14151f] w-full pt-6 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumb / Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          {game.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left: 2/3) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Big Game Image */}
            <div className="w-full bg-[#000] rounded-lg overflow-hidden shadow-2xl relative aspect-video border border-white/5">
              {/* If it were a video, we'd put it here. Using image as requested */}
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actions Bar (Steam-like Play Game block) */}
            <div className="bg-[#1a1a24] border border-[#3f3f50] rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Play {game.title}</h2>
                <p className="text-sm text-gray-400">Free to Play</p>
              </div>
              <button className="bg-gradient-to-r from-[#75b022] to-[#588a1b] hover:from-[#8ed629] hover:to-[#6aa620] text-white px-8 py-3 rounded text-lg font-bold shadow-lg transition-all flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" /> Play Game
              </button>
            </div>

            {/* Description Section */}
            <div className="bg-[#1a1a24] rounded-lg p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">About This Game</h3>
              <p className="text-gray-300 leading-relaxed">
                {game.description}
              </p>
            </div>

          </div>

          {/* Sidebar Area (Right: 1/3) */}
          <div className="space-y-6">
            
            {/* Info Box */}
            <div className="bg-[#1a1a24] rounded-lg overflow-hidden border border-white/5 shadow-lg">
              <img src={game.image} alt={game.title} className="w-full aspect-[2/1] object-cover opacity-80" />
              
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-300">
                  {game.description.substring(0, 100)}...
                </p>

                <div className="text-xs text-gray-400 space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span>RECENT REVIEWS:</span>
                    <span className="text-[#66c0f4] font-bold">Very Positive</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ALL REVIEWS:</span>
                    <span className="text-[#66c0f4] font-bold">Overwhelmingly Positive</span>
                  </div>
                  <div className="flex justify-between mt-2 pt-2 border-t border-white/10">
                    <span>RELEASE DATE:</span>
                    <span className="text-white">Oct 12, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DEVELOPER:</span>
                    <Link to="#" className="text-[#66c0f4] hover:text-white">GameForge Studios</Link>
                  </div>
                  <div className="flex justify-between">
                    <span>PUBLISHER:</span>
                    <Link to="#" className="text-[#66c0f4] hover:text-white">GameForge</Link>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#2a2a36] text-[#66c0f4] text-xs rounded border border-[#3f3f50] cursor-pointer hover:bg-white/10">Action</span>
                  <span className="px-2 py-1 bg-[#2a2a36] text-[#66c0f4] text-xs rounded border border-[#3f3f50] cursor-pointer hover:bg-white/10">Multiplayer</span>
                  <span className="px-2 py-1 bg-[#2a2a36] text-[#66c0f4] text-xs rounded border border-[#3f3f50] cursor-pointer hover:bg-white/10">Co-op</span>
                  <span className="px-2 py-1 bg-[#2a2a36] text-gray-400 text-xs rounded border border-[#3f3f50] cursor-pointer hover:bg-white/10">+</span>
                </div>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-[#2a2a36] hover:bg-[#3f3f50] text-[#66c0f4] text-sm py-2 rounded flex items-center justify-center gap-2 transition-colors">
                <Heart className="w-4 h-4" /> Follow
              </button>
              <button className="flex-1 bg-[#2a2a36] hover:bg-[#3f3f50] text-[#66c0f4] text-sm py-2 rounded flex items-center justify-center gap-2 transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="bg-[#2a2a36] hover:bg-[#3f3f50] text-[#66c0f4] text-sm px-3 rounded flex items-center justify-center transition-colors">
                <Flag className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GameDetails;
