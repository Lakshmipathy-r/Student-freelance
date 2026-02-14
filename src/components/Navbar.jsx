import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Bell, User, Menu, X, Terminal,
  Home, Briefcase, FileText, MessageCircle, Star, Settings, LogOut
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Gigs', path: '/gigs' },
    { icon: FileText, label: 'Applications', path: '/applications' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Star, label: 'Reviews', path: '/reviews' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
              <Terminal className="w-5 h-5 text-primary group-hover:text-black" />
            </div>
            <span className="hidden md:block text-xl font-heading font-bold text-white tracking-tight">
              SF_HUB<span className="text-primary animate-pulse">_</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="SEARCH_PROTOCOL..."
                className="w-full pl-10 pr-4 py-2 bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm font-mono"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-text-muted hover:text-primary transition-colors border border-transparent hover:border-white/10">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-none"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 p-1 pr-3 border border-transparent hover:border-white/10 transition-all bg-surface/50 hover:bg-surface"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black border border-white/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-mono text-white">
                  {user?.name || 'USER_ID'}
                </span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 bg-surface border border-white/10 shadow-xl py-1 z-50"
                  >
                    <div className="px-4 py-2 border-b border-white/10 mb-1">
                       <p className="text-xs text-text-muted uppercase">Signed in as</p>
                       <p className="text-sm font-bold text-white truncate">{user?.email || 'unknown@user.com'}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-4 py-3 text-text-muted hover:text-white hover:bg-white/5 transition-colors text-sm uppercase tracking-wider"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile_Data</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-3 px-4 py-3 text-text-muted hover:text-white hover:bg-white/5 transition-colors text-sm uppercase tracking-wider"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Config</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-accent hover:bg-accent/10 transition-colors text-sm uppercase tracking-wider"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Terminate_Session</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-muted hover:text-white border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 border-l-2 transition-all font-mono text-sm uppercase
                    ${location.pathname === item.path
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-transparent text-text-muted hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
