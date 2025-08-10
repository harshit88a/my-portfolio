import React from 'react';

function Header() {
  return (
    <header
      className="header-hero"
      style={{
        background: 'rgba(3,7,18,0.75)',
        color: 'white',
        padding: '14px 20px',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(99,102,241,0.24)'
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <a href="#top" style={{ color: '#c7d2fe', fontWeight: 700, letterSpacing: '0.04em' }}>HA</a>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
export default Header;