import { User, Lock, Mail, Github, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-glass p-8 md:p-10 w-full max-w-md relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px]"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-[50px]"></div>
        
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-heading font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Login to your GameForge account</p>
        </div>

        <form className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-white" 
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="password" 
                className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-white" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="button" className="w-full btn-primary py-3">
            Login
          </button>
          
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative px-4 bg-surface/60 text-sm text-gray-500">OR</span>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
            <Github className="w-5 h-5" /> Continue with GitHub
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-8 relative z-10">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
