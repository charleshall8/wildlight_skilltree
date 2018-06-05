import React from 'react';
import logo from '../Icon-Banner.jpg';
import Tiers from '../containers/Tiers.js';
import SkillDetails from '../containers/SkillDetails.js';
import AddSkillForm from '../containers/AddSkillForm';


const Header = props => {
  const removeButton = () => {
    if (props.selectedSkillIndex !== -1) {
      return (<button onClick={() => props.removeSkill(props.selectedSkillIndex)}>
        ✖ Remove Skill
      </button>)
    } else
      return (null)
  };

  return (<header className="App-header">

    <div>
      <img src={logo} className="App-logo" alt="logo"/>
    </div>

    <div>
      <SkillDetails selectedSkill={props.selectedSkill}/>
    </div>

    <div>
      <Tiers setTierFilter={props.setTierFilter} tierFilter={props.tierFilter}/>
    </div>
    <div className="addremove-skill">
      <button onClick={() => props.showAddSkill()}>
        {
          props.showAddSkillVal
            ? "Hide Add Skill"
            : "Add New Skill"
        }
      </button>

      {removeButton()}
    </div>

    <AddSkillForm addSkill={props.addSkill} showAddSkillVal={props.showAddSkillVal}/>

  </header>)
};

export default Header;
