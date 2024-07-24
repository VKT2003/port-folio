import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './AddSkillModal.module.css';

const AddSkillModal = ({ show, handleClose, handleSave }) => {
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState([{ skill: '', proficiency: '' }]);
  const [errors, setErrors] = useState({ domain: '', skills: '' });

  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const addSkillField = (event) => {
    event.preventDefault();
    // Only add a new skill field if the last one is valid
    const lastSkill = skills[skills.length - 1];
    if (lastSkill.skill.trim() && lastSkill.proficiency.trim()) {
      setSkills([...skills, { skill: '', proficiency: '' }]);
    }
  };

  const removeSkillField = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { domain: '', skills: '' };

    if (!domain.trim()) {
      newErrors.domain = 'Domain is required.';
      isValid = false;
    }

    const invalidSkills = skills.some(skill =>
      !skill.skill.trim() || !skill.proficiency.trim()
    );

    if (invalidSkills) {
      newErrors.skills = 'Each skill must have both a skill name and proficiency percentage.';
      isValid = false;
    }

    if (skills.length === 0 || skills.every(skill => !skill.skill.trim())) {
      newErrors.skills = 'At least one valid skill is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSave = () => {
    if (validateForm()) {
      handleSave({ domain, skills });
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDomain">
            <Form.Label>Domain</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            {errors.domain && <Form.Text className="text-danger">{errors.domain}</Form.Text>}
          </Form.Group>
          <Form.Label className="mt-3">Skills</Form.Label>
          {skills.map((skill, index) => (
            <div key={index} className={`${styles.skillRow} mb-2 d-flex align-items-center`}>
              <Form.Control
                type="text"
                placeholder="Skill"
                name="skill"
                value={skill.skill}
                onChange={(e) => handleSkillChange(index, e)}
                className={`${styles.skillInput}`}
              />
              <Form.Control
                type="text"
                placeholder="Proficiency (%)"
                name="proficiency"
                value={skill.proficiency}
                onChange={(e) => handleSkillChange(index, e)}
                className={`${styles.proficiencyInput} ml-2`}
              />
              <Button variant="danger" className="ml-2" onClick={() => removeSkillField(index)}>
                Remove
              </Button>
            </div>
          ))}
          {errors.skills && <Form.Text className="text-danger">{errors.skills}</Form.Text>}
          <Button variant="link" onClick={addSkillField}>
            Add another skill
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="warning" onClick={onSave}>
          Add Skill
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSkillModal;
