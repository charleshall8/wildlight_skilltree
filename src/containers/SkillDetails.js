import React from 'react';
import PropTypes from 'prop-types';
import survivalIcon from '../images/survivalIcon.png';
import combatIcon from '../images/combatIcon.png';
import magicIcon from '../images/magicIcon.png';

const skillIcon = skillType => {

  if (skillType === "Survival") {
    return survivalIcon;
  } else if (skillType === "Combat") {
    return combatIcon;
  } else
    return magicIcon;
  }

const SkillDetails = ({selectedSkill}) => {
  if (selectedSkill) {
    return (<div className='skill-details'>
      <div className='skill-title-row'>
        <img src={skillIcon(selectedSkill.skillType)} alt={'logo' + selectedSkill.skillType}/>
        <h1>
          {selectedSkill.name}
        </h1>
      </div>

      <h3>
        Tier: {selectedSkill.tier}</h3>
      <p>
        {selectedSkill.desc}</p>

    </div>);
  } else {
    return (<p>Select a skill to see more details</p>);
  }
}
SkillDetails.propTypes = {
  selectedSkill: PropTypes.object
};
export default SkillDetails;
