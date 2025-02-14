import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Newspaper,
  Briefcase,
  DollarSign,
  BarChart2,
  Coins,
  ChevronRight
} from 'lucide-react';

const NewsLanding = () => {
  const [activeCategory, setActiveCategory] = useState('Stocks');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newsCards = document.querySelectorAll('.news-card');
    const navItems = document.querySelectorAll('.nav-item');

    // Initial state
    newsCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
    });

    navItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 100);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    newsCards.forEach(card => observer.observe(card));

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Setup intersection observer for sections to update active category
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.getAttribute('data-category'));
        }
      });
    }, {
      threshold: 0.5
    });

    document.querySelectorAll('.news-section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      newsCards.forEach(card => observer.unobserve(card));
      document.querySelectorAll('.news-section').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (categoryName) => {
    const section = document.querySelector(`[data-category="${categoryName}"]`);
    if (section) {
      const navHeight = 64;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  // Rest of your existing categories and dummyNews data...
  const categories = [
    { icon: <Briefcase className="h-5 w-5" />, name: "Stocks" },
    { icon: <BarChart2 className="h-5 w-5" />, name: "IPOs" },
    { icon: <DollarSign className="h-5 w-5" />, name: "Mutual Funds" },
    { icon: <Coins className="h-5 w-5" />, name: "Gold" },
    { icon: <TrendingUp className="h-5 w-5" />, name: "ETFs" }
  ];

  const dummyNews = [
    {
      category: "Stocks",
      news: [
        {
          title: "Tech Giants Lead Market Rally",
          description: "Major technology companies push indices to new highs amid strong earnings reports",
          time: "2 hours ago",
          tag: "Market Trends"
        },
        {
          title: "Banking Sector Shows Resilience",
          description: "Banking stocks demonstrate stability despite global economic challenges",
          time: "4 hours ago",
          tag: "Banking"
        }
      ]
    },
    {
      category: "IPOs",
      news: [
        {
          title: "Upcoming Tech Startup IPO",
          description: "Revolutionary AI company announces IPO plans for next quarter",
          time: "1 hour ago",
          tag: "Technology"
        },
        {
          title: "Record Subscription for New IPO",
          description: "Latest public offering oversubscribed by 50 times on day one",
          time: "3 hours ago",
          tag: "IPO Update"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-orange-900/30 selection:text-orange-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-orange-950/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Category Navigation */}
      <nav className="sticky top-0 bg-black/80 backdrop-blur-md z-40 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-16 items-center overflow-x-auto no-scrollbar">
            {categories.map((category, index) => (
              <div 
                key={index}
                onClick={() => scrollToSection(category.name)}
                className={`nav-item flex items-center space-x-2 cursor-pointer px-3 py-1 rounded-lg hover:bg-orange-500/10 transition-all duration-300 ${
                  activeCategory === category.name 
                    ? 'text-orange-400 bg-orange-500/10' 
                    : 'text-orange-500 hover:text-orange-400'
                }`}
              >
                {category.icon}
                <span className="whitespace-nowrap">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* News Header */}
      <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Newspaper className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-white font-['Poppins']">
              Market News
            </h1>
          </div>
          <p className="text-orange-100/80 text-lg">
            Stay ahead with the latest updates from the financial markets
          </p>
        </div>
      </div>

      {/* News Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          {dummyNews.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="news-section mb-12"
              data-category={section.category}
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-['Poppins']">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.news.map((item, index) => (
                  <div 
                    key={index}
                    className="news-card group p-6 bg-orange-950/10 backdrop-blur-sm rounded-xl border border-orange-500/10 hover:border-orange-500/20 shadow-lg shadow-orange-500/5 hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-orange-300/60 text-sm">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-100 group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-orange-200/70 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                      <span className="text-sm font-medium">Read more</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLanding;