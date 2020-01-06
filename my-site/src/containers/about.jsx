import React from 'react';
import Me1 from '../images/me1.jpg';
import Me2 from '../images/me2.jpg';

class AboutMeWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          text: 'HTML / CSS',
          level: 'high'
        },
        {
          text: 'JavaScript',
          level: 'high'
        },
        {
          text: 'React',
          level: 'high'
        },
        {
          text: 'Angular',
          level: 'middle'
        },
        {
          text: 'NodeJs',
          level: 'middle'
        },
        {
          text: 'Git',
          level: 'middle'
        },
        {
          text: 'TypeScript',
          level: 'middle'
        },
        {
          text: 'TDD',
          level: 'low'
        },
        {
          text: 'Scrum work flow',
          level: 'low'
        }
      ],
      tags: ['IT 民工', '开朗活泼', '骚气十足', '麦霸', '交际花', '技术过硬', '电影爱好者', '综艺爱好者', '偶尔健身']
    };
  }

  render() {
    const { skills, tags } = this.state;
    return <div className="about-me">
      <div className="photo">
        <img src={Me1} alt=""/>
        <img src={Me2} alt=""/>
      </div>
      <div className="skill-wrapper">
        <h3>技能</h3>
        <ul className="skills">
          {skills.map(s => (<li className={`skill ${s.level}`}><span>{s.text}</span></li>))}
        </ul>
      </div>
      <h3>标签</h3>
      <div className="tags">
        {tags.map(t => (<span className="tag">{t}</span>))}
      </div>
    </div>
  }
}

export default AboutMeWrapper;
