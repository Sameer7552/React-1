import React from 'react';

const Footer = () => (
    <footer className="text-white py-3 mt-auto text-end">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-6">
            <p>&copy; 2024 My Landing Page</p>
          </div>
          <div className="col-6">
            <p>
              Made with<i className="fas fa-heart" style={{ color: '#0077b6', textShadow: '0 0 10px #0077b6', marginLeft: '0.5rem', marginRight: '0.5rem' }}></i>by Sameer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
export default Footer;
