import React from 'react';
import PropTypes from 'prop-types';
import survivalIcon from '../images/survivalIcon.png';
import combatIcon from '../images/combatIcon.png';
import magicIcon from '../images/magicIcon.png';

//set value for deciding CSS class name for if the object is selected.
const setSkillClassName = (skillType, skillIndex, skillId) => {
  const isSelected = () => {
    if (skillIndex === skillId) {
      return "active-"
    } else
      return ""
  }
  return isSelected() + "skill-" + skillType.toLowerCase() + " skill"
}
//Set Skill className, action, and logo
const Skill = props => (<div className={setSkillClassName(props.skillType, props.selectedSkillIndex, props.id)} onClick={() => props.selectSkill(props.id)}>
  <div className="icon">
    <img src={skillIcon(props.skillType)} alt={'logo' + props.skillType}/>
  </div>
  <p>{props.name}</p>

</div>);

//decide which logo to show for the skill
const skillIcon = skillType => {
  if (skillType === "Survival") {
    return survivalIcon;
  } else if (skillType === "Combat") {
    return combatIcon;
  } else
    return magicIcon;
  }

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired,
  skillType: PropTypes.string.isRequired,
  selectSkill: PropTypes.func.isRequired
};

export default Skill;
