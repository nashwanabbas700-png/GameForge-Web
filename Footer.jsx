import { Gamepad2, Github, Twitter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                GameForge
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              The premier platform for browser-based gaming, indie development, and AI-powered creation tools.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/explore" className="hover:text-primary transition-colors">Explore Games</Link></li>
              <li><Link to="/upload" className="hover:text-primary transition-colors">Upload Game</Link></li>
              <li><Link to="/competitions" className="hover:text-primary transition-colors">Competitions</Link></li>
              <li><Link to="/leaderboard" className="hover:text-primary transition-colors">Leaderboards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/ai-tools" className="hover:text-primary transition-colors">AI Generator</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dev Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 GameForge Web. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
