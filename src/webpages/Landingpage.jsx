import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  BarChart2, 
  Newspaper 
} from 'lucide-react';

const LandingPage = () => {
  // Previous useEffect code remains the same
  useEffect(() => {
    const logo = document.querySelector('.logo-container');
    const buttons = document.querySelector('.button-container');
    const heroText = document.querySelector('.hero-text');
    const heroPara = document.querySelector('.hero-para');
    const heroButton = document.querySelector('.hero-button');
    const featureCards = document.querySelectorAll('.feature-card');

    [logo, buttons, heroText, heroPara, heroButton].forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
      }
    });

    const initialAnimations = [
      { el: logo, delay: 100, x: -100 },
      { el: buttons, delay: 300, x: 100 },
      { el: heroText, delay: 600 },
      { el: heroPara, delay: 800 },
      { el: heroButton, delay: 1000 }
    ];

    initialAnimations.forEach(({ el, delay, x = 0 }) => {
      if (el) {
        setTimeout(() => {
          el.style.transition = 'all 1s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
        }, delay);
      }
    });

    const animationDirections = [
      { x: -100, y: 0 },
      { x: 0, y: 100 },
      { x: 100, y: 0 },
      { x: -100, y: 0 },
      { x: 0, y: 100 },
      { x: 100, y: 0 }
    ];

    featureCards.forEach((card, index) => {
      const direction = animationDirections[index];
      card.style.opacity = '0';
      card.style.transform = `translate(${direction.x}px, ${direction.y}px)`;
      card.style.transition = 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate(0, 0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    featureCards.forEach(card => observer.observe(card));
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      featureCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-orange-900/30 selection:text-orange-100">
    
<Navbar/>
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-['Poppins'] leading-tight selection:bg-orange-900/30 selection:text-orange-100">
              Your Gateway to<br/>
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Financial Freedom
              </span>
            </h1>
            <p className="hero-para text-xl md:text-2xl text-orange-100/80 max-w-3xl mx-auto mb-8 font-light">
              Master the Indian stock market with real-time analytics, expert insights, and comprehensive learning resources.
            </p>
            <a href='http://localhost:5173/chatbot'>
            <button className="hero-button px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl hover:from-orange-500 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
              Begin Your Journey
            </button></a>
            
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white font-['Poppins'] selection:bg-orange-900/30 selection:text-orange-100">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-12 w-12 text-orange-500" />,
                title: "Smart Stock Search",
                description: "Search and analyze any stock with our advanced charting tools and technical indicators."
              },
              {
                icon: <Newspaper className="h-12 w-12 text-orange-500" />,
                title: "Real-time News",
                description: "Stay updated with latest stock-specific news and market developments."
              },
              {
                icon: <BarChart2 className="h-12 w-12 text-orange-500" />,
                title: "Market Movers",
                description: "Track top gainers and losers across different market categories."
              },
              {
                icon: <BookOpen className="h-12 w-12 text-orange-500" />,
                title: "Learning Resources",
                description: "Access comprehensive guides and tutorials designed for beginners."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
                title: "Technical Analysis",
                description: "Learn to read charts and make data-driven investment decisions."
              },
              {
                icon: <TrendingDown className="h-12 w-12 text-orange-500" />,
                title: "Risk Management",
                description: "Understand market risks and learn strategies to protect your investments."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-card p-8 bg-orange-950/10 backdrop-blur-sm rounded-xl border border-orange-500/10 shadow-lg shadow-orange-500/5 hover:shadow-orange-500/10 transition-all duration-300 selection:bg-orange-900/30 selection:text-orange-100"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 mt-4 font-['Poppins'] text-orange-100">{feature.title}</h3>
                <p className="text-orange-200/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;