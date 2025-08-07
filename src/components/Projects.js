import React from 'react';

const projects = [
  { name: 'GAN Image Colorization', github: 'https://github.com/harshit/image-colorization', description: 'Colorizing black & white images using GANs and LAB color space.' },
  { name: 'Diffusion Model for Colorization', github: 'https://github.com/harshit/diffusion-colorization', description: 'Converting grayscale to color using a diffusion model with PyTorch.' },
  { name: 'Language Learning App', github: 'https://github.com/harshit/lang-app', description: 'A mobile app that helps users learn languages through quizzes and flashcards.' }
];

function Projects() {
  return (
    <section style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;