import React, { useState, useEffect } from 'react';
import { Lock, Mail, User, ArrowLeft, TrendingUp } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const form = document.querySelector('.auth-form');
    const logo = document.querySelector('.auth-logo');
    const title = document.querySelector('.auth-title');
    
    if (form) form.style.opacity = '0';
    if (logo) logo.style.opacity = '0';
    if (title) title.style.opacity = '0';
    
    setTimeout(() => {
      if (logo) {
        logo.style.transition = 'all 0.8s ease-out';
        logo.style.opacity = '1';
      }
    }, 300);
    
    setTimeout(() => {
      if (title) {
        title.style.transition = 'all 0.8s ease-out';
        title.style.opacity = '1';
      }
    }, 500);
    
    setTimeout(() => {
      if (form) {
        form.style.transition = 'all 0.8s ease-out';
        form.style.opacity = '1';
      }
    }, 700);
  }, []);

  const toggleMode = () => {
    const form = document.querySelector('.auth-form');
    if (form) {
      form.style.opacity = '0';
      setTimeout(() => {
        setIsLogin(!isLogin);
        form.style.opacity = '1';
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-orange-900/30 selection:text-orange-100 flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-950 to-black items-center justify-center p-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Poppins']">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              StockGuru
            </span>
          </h2>
          <p className="text-orange-100/80 text-lg leading-relaxed">
            Join thousands of investors who trust StockGuru for their market analysis and investment decisions. Get access to real-time data, expert insights, and comprehensive tools to master the Indian stock market.
          </p>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="auth-logo flex items-center justify-center mb-8">
            <TrendingUp className="h-10 w-10 text-orange-500" />
            <span className="ml-2 text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-['Poppins']">
              StockGuru
            </span>
          </div>

          {/* Title */}
          <div className="auth-title text-center">
            <h2 className="text-3xl font-bold text-white mb-2 font-['Poppins']">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-orange-100/70">
              {isLogin ? 'Enter your credentials to continue' : 'Start your investment journey today'}
            </p>
          </div>

          {/* Form */}
          <form className="auth-form space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-orange-100 text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="text"
                    className="w-full bg-orange-950/10 border border-orange-500/20 rounded-lg py-3 px-11 text-orange-100 placeholder-orange-500/50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-orange-100 text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                <input
                  type="email"
                  className="w-full bg-orange-950/10 border border-orange-500/20 rounded-lg py-3 px-11 text-orange-100 placeholder-orange-500/50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-orange-100 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                <input
                  type="password"
                  className="w-full bg-orange-950/10 border border-orange-500/20 rounded-lg py-3 px-11 text-orange-100 placeholder-orange-500/50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="text-center">
            <button
              onClick={toggleMode}
              className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;