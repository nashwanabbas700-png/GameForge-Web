import { Wand2, Zap, BrainCircuit, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AITools = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-[0_0_20px_rgba(108,92,231,0.5)]">
          <Wand2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">AI Game Idea Generator</h1>
        <p className="text-gray-400">Describe your basic concept, and let our AI expand it into a complete game design document with storyline, mechanics, and characters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="card-glass p-6 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BrainCircuit className="w-24 h-24" />
            </div>
            <h3 className="font-bold text-xl mb-4 relative z-10">Generate Idea</h3>
            <div className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Enter Game Theme or Prompt</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" 
                  placeholder="E.g., A survival horror game set in a futuristic underwater city..."
                ></textarea>
              </div>
              <button className="w-full btn-primary group">
                <Zap className="w-4 h-4 mr-2" /> Generate Concept
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card-glass p-4 text-center cursor-pointer hover:border-secondary/50">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <span className="text-sm font-medium">Random Idea</span>
            </div>
            <div className="card-glass p-4 text-center cursor-pointer hover:border-primary/50">
              <Wand2 className="w-6 h-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Enhance Concept</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="card-glass p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
            <BrainCircuit className="w-16 h-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">Awaiting Prompt</h3>
            <p className="text-sm text-gray-500 max-w-sm">Enter a theme on the left to generate a comprehensive game concept, including mechanics, story, and art style suggestions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
