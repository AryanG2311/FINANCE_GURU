import React from 'react'
import { 
    Search, 
    TrendingUp, 
    TrendingDown, 
    BookOpen, 
    BarChart2, 
    Newspaper 
  } from 'lucide-react';

export default function Navbar() {
  return (
    <div>
        {/* Navbar */}
        <nav className="fixed w-full top-0 bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="logo-container flex items-center cursor-pointer selection:bg-orange-900/30 selection:text-orange-100">
              <TrendingUp className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-['Poppins']">
                StockGuru
              </span>
            </div>
            <div className="button-container flex items-center space-x-4">
                <a href='http://localhost:5173/login'>
                 <button className="px-6 py-2 text-orange-500 hover:text-orange-400 font-medium rounded-lg border border-orange-500/50 hover:border-orange-400 transition-all duration-300 active:scale-95 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
                Login
              </button></a>
             
             <a href='http://localhost:5173/login'>
             <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
                Sign Up
              </button></a>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
