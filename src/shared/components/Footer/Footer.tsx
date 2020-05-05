import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
    <footer className="footer mt-auto">
      <div className="copyright bg-white">
        <p> © <span id="copy-year">2020</span> Gardens. All right reserved. </p>
      </div>
    </footer>
    );
}

export default Footer;