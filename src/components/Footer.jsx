import React from 'react';
import me from '../assets/me2.png';
import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Footer" />
        <h2>Vaibhav Randale</h2>
        <p>Motivation is temperory , but discipline last forever</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/VaibhavR02" target={'blank'}>
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/vaibhavrandale/" target={'blank'}>
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-randale-430938200/"
            target={'blank'}
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
