import React from 'react';
import { FaTwitter, FaPinterest, FaReddit, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Icons.css'; // Asegúrate de importar el archivo CSS

function Icons() {
  return (
    <div className="icons-container">
      <div className="icon-wrapper">
        <FaTwitter size={40} color="#1DA1F2" className="icon" />
        <FaPinterest size={40} color="#E60023" className="icon" />
        <MdEmail size={40} color="#D44638" className="icon" />
        <FaReddit size={40} color="#FF4500" className="icon" />
        <FaTelegramPlane size={40} color="#0088cc" className="icon" />
      </div>
    </div>
  );
}

export default Icons;
