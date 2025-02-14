import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Send, 
  MessageSquare, 
  Clock
} from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Namaste! I'm MehtaJi, your personal financial advisor. How can I assist you with your investment journey today?",
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [previousChats] = useState([
    { id: 1, title: "Investment Strategy Discussion", date: "2 days ago" },
    { id: 2, title: "Market Analysis", date: "5 days ago" },
    { id: 3, title: "Portfolio Review", date: "1 week ago" }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date().toISOString()
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: "Based on your query, I can help you create a tailored investment strategy. Would you like me to explain more about specific investment options suitable for you?",
        timestamp: new Date().toISOString()
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-orange-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-orange-950/10 border-r border-orange-500/20 p-4 hidden md:flex flex-col transition-all duration-300 ease-in-out">
        <div className="flex items-center mb-8 space-x-2 hover:scale-105 transition-transform duration-300">
          <TrendingUp className="h-6 w-6 text-orange-500 animate-pulse" />
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent hover:from-orange-400 hover:to-orange-200 transition-all duration-300">
            MehtaJi
          </span>
        </div>
        
        <button className="w-full px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 rounded-lg mb-4 text-left flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
          <MessageSquare className="h-4 w-4" />
          <span>New Chat</span>
        </button>
        
        <div className="flex flex-col space-y-2 flex-1 overflow-y-auto">
          <h3 className="text-sm text-orange-300/70 font-medium mb-2 px-2">Previous Chats</h3>
          {previousChats.map(chat => (
            <button
              key={chat.id}
              className="px-4 py-2 hover:bg-orange-500/10 rounded-lg text-left transition-all duration-300 group hover:translate-x-1"
            >
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-400/60 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm truncate flex-1">{chat.title}</span>
              </div>
              <span className="text-xs text-orange-300/50 ml-6">{chat.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col max-h-screen">
        {/* Chat Header */}
        <div className="border-b border-orange-500/20 p-4 bg-black/80 backdrop-blur-md">
          <h2 className="text-xl font-semibold text-orange-100 animate-fade-in">MehtaJi - Your Financial Advisor</h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${
                  message.type === 'user'
                    ? 'bg-orange-500 text-white ml-4 hover:bg-orange-400'
                    : 'bg-orange-950/10 border border-orange-500/20 hover:bg-orange-950/20'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-orange-500/20 p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask MehtaJi about your investment queries..."
              className="flex-1 bg-orange-950/10 border border-orange-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-orange-100 placeholder-orange-300/50 transition-all duration-300"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;