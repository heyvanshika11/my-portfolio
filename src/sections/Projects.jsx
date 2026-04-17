import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'HateNix',
      subtitle: 'AI-Based Toxic Content Detection & Removal System',
      description: 'Developed an AI-powered system to detect and remove toxic comments from platforms like YouTube using NLP techniques. Built an additional module for virtual classrooms (Zoom/Meet) to detect abusive behavior in real-time and auto-moderate users.',
      tags: ['AI/ML', 'NLP', 'Python', 'Real-time Processing'],
      link: '#',
      github: '#',
      type: 'Auto Detection & Deletion'
    },
    {
      title: 'Nexus Data Analytics',
      subtitle: 'Modern Data Visualization Dashboard',
      description: 'A comprehensive data analytics platform mirroring Power BI functionalities. Features clean, interactive UI built with React and advanced data processing for generating deep insights from complex datasets.',
      tags: ['React', 'Data Analytics', 'Visualization', 'Dashboard'],
      image: '/data_dashboard.png',
      link: '#',
      github: '#',
      type: 'Web App'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects & Apps
        </motion.h2>

        <div className="grid-2">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="glass card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: index * 0.2 }}
            >
              {project.image ? (
                <div style={{ width: '100%', height: '250px', background: 'var(--bg-dark)' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{ width: '100%', height: '250px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', color: 'white', fontWeight: 800 }}>{project.type}</h3>
                </div>
              )}
              
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{project.title}</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '20px' }}>{project.subtitle}</p>
                <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '20px', lineHeight: 1.6 }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '15px', fontSize: '0.85rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--bg-dark)', textDecoration: 'none', background: 'var(--primary)', padding: '10px 20px', borderRadius: '8px', fontWeight: 600 }}>
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
