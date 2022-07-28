import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';


const Skills = () => {

  const experiences = [
    {year: '2016 - 2020', works: [ {name: 'Mahasiswa', company: 'Universitas Amikom Yogyakarta', desc: 'Saya Mahasiswa Jurusan Teknik Informatika.'}]},
    {year: '2020 - 2022', works: [ {name: 'Freelance', company: '-', desc: 'Saya Seorang Web Desaign.'}]},
    {year: '2022', works: [ {name: 'Full Stack Developer', company: 'Hasnur Group', desc: 'Saya bekerja sebagai full stack developer.'}]},
    {year: '2022', works: [ {name: 'Mobile Developer', company: 'Hasnur Group', desc: 'Saya juga seorang mobile developer.'}]},

  ]

  const skills = [
    {name: 'React', bgColor: '', icon: images.react },
    {name: 'Flutter', bgColor: '', icon: images.flutter },
    {name: 'Git', bgColor: '', icon: images.git },
    {name: 'JavaScript', bgColor: '', icon: images.javascript },
  ]


  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
