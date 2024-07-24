import React, { useEffect, useState } from 'react'
import SkillCard from '../SkillsCard/SkillsCard';
import styles from './Skills.module.css'
import AddSkillModal from '../AddSkill/AddSkillModal';

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const [skillsData, setSkillsData] = useState([]);

  // Fetch skills data from server on component mount
  useEffect(() => {
    fetch('http://localhost:5000/skills')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveSkill = async (newSkill) => {
    const { domain, skills } = newSkill;

    console.log(domain, skills);

    const newDomainSkills = {
      id: Math.random().toString(36).substr(2, 9),
      domain: domain,
      skills: skills.map(skill => ({
        skill: skill.skill,
        proficiency: parseInt(skill.proficiency, 10)
      }))
    };

    const updatedSkillsData = [...skillsData, newDomainSkills];
    setSkillsData(updatedSkillsData);

    try {
      await fetch('http://localhost:5000/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDomainSkills),
      });
    } catch (error) {
      console.error('Error adding skill:', error);
    }

    handleCloseModal();
  };

  console.log(skillsData);

  const renderSkillCards = () => {
    return skillsData.map((domainData, index) => (
      <div key={index} className={`${styles.col_md_4} col-md-4`}>
        <SkillCard title={domainData.domain} skills={domainData.skills} />
      </div>
    ));
  };


  return (
    <div className={`${styles.container} container mt-5`}>
      <div className="cards">
        <div className="text-center mb-5">
          <h2>Skills & Languages</h2>
          <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.</p>
        </div>
        <div className={`row ${styles.row}`}>
          {renderSkillCards()}
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-warning" onClick={handleShowModal}>Add Skill</button>
      </div>
      <AddSkillModal show={showModal} handleClose={handleCloseModal} handleSave={handleSaveSkill} />
    </div>
  )
}

export default Skills