import React from 'react';

const projects = [
  { name: 'Image Colorization using Deep Learning', github: 'https://github.com/harshit88a/colorization', description: 'Colorizing black & white images using deep learning frameworks such as CNNs and GANs.' },
  { name: 'Diffusion Model for Colorization', github: 'https://github.com/harshit/diffusion-colorization', description: 'Converting grayscale to color using a diffusion model with PyTorch.' },
  { name: 'Language Learning App', github: 'https://github.com/harshit/lang-app', description: 'A mobile app that helps users learn languages through quizzes and flashcards.' }
];

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {projects.map((project, idx) => (
          <li key={idx} style={{ marginBottom: 14 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <strong style={{ color: '#c7d2fe' }}>{project.name}</strong>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                onMouseOver={e => e.currentTarget.style.color = '#2563eb'}
                onMouseOut={e => e.currentTarget.style.color = '#60a5fa'}
              >
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }} aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span style={{ fontSize: '0.97em' }}>GitHub</span>
              </a>
            </span>
            <div>
              <span style={{ color: '#cbd5e1' }}>{project.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;