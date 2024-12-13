import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false); // Close menu on link click (for mobile)
  };

  return (
    <Router>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-white">Islem Othmani</h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'experience', 'education', 'projects', 'associativeworks'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`text-sm font-medium transition-colors ${activeLink === link ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => onUpdateActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <HashLink to="#contact">
              <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">Contact Me</button>
            </HashLink>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white py-4 space-y-4">
            {['home', 'about', 'experience', 'education', 'projects', 'associativeworks'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`block text-sm font-medium text-center transition-colors ${activeLink === link ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => onUpdateActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <div className="text-center">
              <HashLink to="#contact">
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">Contact Me</button>
              </HashLink>
            </div>
          </div>
        )}
      </nav>
    </Router>
  );
};
