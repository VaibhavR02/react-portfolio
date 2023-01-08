// import React from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
// const Header = () => {
//   return (
//     <nav>
//       <NavContent />
//       <button>
//         <AiOutlineMenu />
//       </button>
//     </nav>
//   );
// };

// const NavContent = () => (
//   <>
//     <h2>Vaibhav.</h2>
//     <div>
//       <a href="#home">Home</a>
//       <a href="#work">Work</a>
//       <a href="#timeline">Timeline</a>

//       <a href="#testimonial">Testimonial</a>
//       <a href="#contact">Contact</a>
//     </div>

//     <a href="mailto:vaibhavrandale800@gmail.com">
//       <button>Email</button>
//     </a>
//   </>
// );
// export default Header;

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>
      {' '}
      <a href="#home" style={{ color: 'black' }}>
        Vaibhav.
      </a>{' '}
    </h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Timeline
      </a>

      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:vaibhavrandale800@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
