import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/vanshika', label: 'LinkedIn' },
    { icon: <FaGithub size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:vanshika.in11@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Achievements', target: 'achievements' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="glass" style={{ marginTop: '100px', padding: '60px 0 20px 0', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 5, 5, 0.8)' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '40px', textAlign: 'left' }}>
          {/* Brand & Motto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '15px' }}>Vanshika.</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '300px' }}>
              Building scalable applications and extracting insights from data with a passion for quality and reliability.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px' }}>Quick Navigation</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {quickLinks.map((link, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <a 
                    onClick={() => scrollTo(link.target)}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px' }}>Let's Connect</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: 'white', background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'all 0.3s ease', border: '1px solid var(--glass-border)' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Based in Haryana, India
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Vanshika. Final Year B.Tech CSE Student.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            Made with <FaHeart style={{ color: '#ef4444' }} /> for the Web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
