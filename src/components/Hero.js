import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const newScale = Math.max(0.7, 1 - y / 900);
      setScale(newScale);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="hero"
      style={{
        minHeight: '88vh',
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        textAlign: 'center',
        color: '#e5e7eb',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.2s',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
          alt="Profile"
          style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid rgba(99, 102, 241, 0.65)',
            boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
            marginBottom: 18,
          }}
        />
        <h1 style={{ fontSize: '2.4rem', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>Harshit Agrawal</h1>
        <div style={{ fontSize: '1.2rem', marginBottom: 18 }}>
          <ReactTyped
            strings={[
              'MS CS @ University at Buffalo',
              'AI/ML Engineer',
              'Python | Java | AWS | GCP',
              'Building thoughtful experiences',
            ]}
            typeSpeed={40}
            backSpeed={30}
            backDelay={1200}
            loop
          />
        </div>
        <a
          href="#projects"
          className="resume-btn"
          style={{ textDecoration: 'none' }}
        >
          <span className="resume-btn-inner">Explore Projects</span>
        </a>
        <div style={{ marginTop: 18 }}>
          <a
            href="/assets/resume_harshit.pdf"
            download
            style={{
              color: '#a5b4fc',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              transition: 'color 0.2s, transform 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = '#6366f1';
              e.currentTarget.style.transform = 'scale(1.07)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = '#a5b4fc';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


