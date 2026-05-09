import { Trophy, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Competitions = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2 flex items-center gap-3">
            <Trophy className="w-10 h-10 text-highlight" /> Weekly Competitions
          </h1>
          <p className="text-gray-400">Join tournaments, showcase your skills, and win prizes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Active Tournaments</h2>
          
          {[1, 2, 3].map((item) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item * 0.1 }}
              key={item} 
              className="card-glass p-6 border-l-4 border-l-primary relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-bold uppercase">Live</span>
                    <span className="text-sm text-gray-400">Platform: Browser</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{['Neon Genesis Cup', 'Retro Pixel Challenge', 'Speedrun Masters'][item-1]}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Trophy className="w-4 h-4 text-highlight"/> $1,000 Pool</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4"/> 128/256 Players</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> Ends in 2 Days</span>
                  </div>
                </div>
                
                <button className="btn-primary shrink-0 whitespace-nowrap">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="card-glass p-6">
            <h3 className="font-bold text-xl mb-6">Upcoming</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 bg-surface rounded-lg shrink-0 border border-white/5"></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Indie Showcase 2026</h4>
                    <p className="text-xs text-gray-400 mb-2">Starts Nov 15th</p>
                    <a href="#" className="text-xs text-primary hover:underline flex items-center">View details <ArrowRight className="w-3 h-3 ml-1"/></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-glass p-6 bg-gradient-to-br from-surface to-surface/50 border-secondary/30">
            <h3 className="font-bold text-xl mb-2 text-secondary">Organize a Tourney?</h3>
            <p className="text-sm text-gray-400 mb-4">Create your own private or public competition with custom rules.</p>
            <button className="w-full btn-secondary py-2">Create Tournament</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
