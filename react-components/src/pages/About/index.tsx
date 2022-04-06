import { Component } from 'react';
import { FiGithub } from 'react-icons/fi';

import './styles.scss';

class About extends Component {
  render() {
    return (
      <main className="about">
        <span className="about__text">Hi, my name is Sashtje. You are welcome to my github</span>
        <a
          className="about__link"
          href="https://github.com/sashtje"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
      </main>
    );
  }
}

export default About;
