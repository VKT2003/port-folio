import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styles from './SkillsCard.module.css';

const SkillCard = ({ title, skills }) => (
  <div className={`${styles.card} card mb-4`}>
    <div className={`${styles.card_body} card-body`}>
      <h5 className={`card-title ${styles.card_title}`}>{title}</h5>
      {skills.map((skill, index) => (
        <div key={index} className="mb-2">
          <div className={`d-flex justify-content-between ${styles.d_flex}`}>
            <span>{skill.skill}</span>
            <span>{skill.proficiency}%</span>
          </div>
          <ProgressBar now={skill.proficiency} className= {`${styles.progress}`} />
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
