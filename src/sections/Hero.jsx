import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-flex-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, minWidth: 'min(100%, 300px)' }}
          >
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>Hi, I'm</h2>
            <h1 className="hero-title">
              <span className="text-gradient">Vanshika.</span>
            </h1>
            <p className="hero-subtitle">
              Building scalable applications, extracting insights from data, <br className="hidden-mobile" />
              and ensuring software works reliably — end to end.
            </p>
            <div className="hero-buttons-wrapper" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a href="https://linkedin.com/in/vanshika" target="_blank" rel="noreferrer" style={{ color: 'white', background: 'var(--glass-bg)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', transition: 'all 0.3s ease' }}>
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:vanshika.in11@gmail.com" style={{ color: 'white', background: 'var(--glass-bg)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', transition: 'all 0.3s ease' }}>
                <Mail size={24} />
              </a>
              <a onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }} href="#projects" style={{ color: 'white', background: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--primary)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                View Work
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: 1, minWidth: 'min(100%, 300px)', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '350px', aspectRatio: '1/1', borderRadius: '50%', padding: '10px', background: 'linear-gradient(to right, var(--primary), var(--accent))' }}>
              <img 
                src="/vanshika.jpeg" 
                alt="Vanshika" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '5px solid var(--bg-dark)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
