import React from 'react';
import { FaTwitter, FaPinterest, FaReddit, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Icons() {
  return (
    <div>
      <div>
        <FaTwitter size={40} color="#1DA1F2" style={{ margin: '0 10px' }} />
        <FaPinterest size={40} color="#E60023" style={{ margin: '0 10px' }} />
        <MdEmail size={40} color="#D44638" style={{ margin: '0 10px' }} />
        <FaReddit size={40} color="#FF4500" style={{ margin: '0 10px' }} />
        <FaTelegramPlane size={40} color="#0088cc" style={{ margin: '0 10px' }} />
      </div>
    </div>
  );
}

export default Icons;
