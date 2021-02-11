import React from 'react';

import './footer.css';
import {AiOutlineMail,AiOutlinePhone,AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
export default function Footer(){
  return(
    <footer className='footer-bg'>
      <div className='footer'>
            <div className="footer-left">
                <p>Rua Paraiso das Garças, 1678 - Humaitá</p>
                <p><AiOutlineMail className='footer-mail'/> superfruti@gmail.com</p>
                <p><AiOutlinePhone/>(21)3292-5400 </p>
            </div>
            <div className="footer-center">
            <p>Project by Fluxo Consultoria</p>
            </div>
            <div className="footer-right">
                <AiOutlineInstagram className="footer-icon"/>
                <AiOutlineFacebook className="footer-icon"/>
                <FaTelegramPlane className="footer-icon"/>
                <AiOutlineWhatsApp className="footer-icon"/>
            </div>
          </div>
        </footer>
  );
}