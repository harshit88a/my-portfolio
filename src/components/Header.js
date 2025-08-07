import React, { useState, useRef, useEffect } from 'react';
function Header() {
  const [scale, setScale] = useState(1);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Shrink from 1 to 0.5 as you scroll 0 to 300px
      const newScale = Math.max(0.5, 1 - scrollY / 600);
      setScale(newScale);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="header-hero"
      style={{
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: `${24 * scale + 12}px 20px`,
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        transition: 'padding 0.4s cubic-bezier(.4,2,.6,1)',
        boxShadow: scale < 0.8 ? '0 2px 12px rgba(0,0,0,0.18)' : '0 4px 24px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src="/assets/profile.jpg"
        alt="Profile"
        className="profile-pic"
        style={{
          width: `${120 * scale + 40}px`,
          height: `${120 * scale + 40}px`,
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: 16,
          boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
          border: '4px solid #222',
          transition: 'width 0.4s, height 0.4s',
        }}
      />
      <h1 style={{ fontSize: `${2.2 * scale + 1.2}rem`, margin: 0, transition: 'font-size 0.4s' }}>Harshit Agrawal</h1>
      <p style={{ fontSize: `${1.1 * scale + 0.6}rem`, margin: 0, transition: 'font-size 0.4s' }}>MS CS @ University at Buffalo | AI/ML Enthusiast</p>
    </header>
  );
}
export default Header;