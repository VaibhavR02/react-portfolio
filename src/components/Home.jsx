import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from '../assets/me1.png';

const Home = () => {
  const clientCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  // initial={{
  //     x: '-100%',
  //     opacity: 0,
  //   }}
  //   whileInView={{
  //     x: 0,
  //     opacity: 1,
  //   }}

  const animations = {
    h1: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Vaibhav Randale
          </motion.h1>
          <Typewriter
            options={{
              strings: ['A Developer', 'A Designer', 'A Beginner'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriterpara',
              cursor: '',
            }}
          />

          <div>
            <a href="mailto:vaibhavrandale800@gmail.com">Hire me</a>

            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Projects Done</span>
          </article>
        </div>
      </section>

      <section>
        <img src={me} alt="Vaibhav Randale" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
