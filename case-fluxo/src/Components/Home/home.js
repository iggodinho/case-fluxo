import React from 'react';
import './home.css';
import {IoHandRightOutline} from 'react-icons/io5'
import {BsArrowRightShort} from 'react-icons/bs'


export default function Home(){
  
  return(
    <div className='home-bg'>
      <div className='home'>
        <div className='home-text'>
          <h1 className='home-title'>Seja bem-vindo ao Superfruti  <IoHandRightOutline className='home-hello'/></h1>
          <div className='home-innertext'>
            
           <h2> <BsArrowRightShort className='arrow'/>Oferecemos produtos orgânicos da maior qualidade</h2>
            <h2><BsArrowRightShort className='arrow'/>Não deixe de conferir a cebola picada, nosso mais novo produto!</h2>
          </div>
        </div>
    
      </div>

     
    </div>
  );
}