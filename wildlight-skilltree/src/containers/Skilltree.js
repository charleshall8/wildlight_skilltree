import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as SkillActionCreators from '../actions/skill';
import Skill from '../components/Skill.js';
import Header from '../components/Header.js';


import '../App.css';

class Skilltree extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired
  };



  render() {
    //set important variables to props to be passed
    const {dispatch, skills, selectedSkillIndex, showAddSkillVal, tierFilter} = this.props;
    //bind the actions
    const addSkill = bindActionCreators(SkillActionCreators.addSkill, dispatch);
    const removeSkill = bindActionCreators(SkillActionCreators.removeSkill, dispatch);
    const showAddSkill = bindActionCreators(SkillActionCreators.showAddSkill, dispatch);
    const setTierFilter = bindActionCreators(SkillActionCreators.setTierFilter,dispatch);
    const selectSkill = bindActionCreators(SkillActionCreators.selectSkill,dispatch);


    //set selectedSkill to skill in skills list
    let selectedSkill;
    if(selectedSkillIndex !== -1){
      selectedSkill = skills.find(skills => skills.key===selectedSkillIndex);
    }

    // filter the skills based on the skill tierFilter selected and the
    // skillTypeInput (Survival, Combat, Magic) which is passed in
    const skillsList = (skillTypeInput) => {
      const skillsFiltered= skills.filter((skill, key) =>{
          if(skill.skillType===skillTypeInput && skill.tier===tierFilter){
            return true
          }
        else  return false
        });
        //set skillComponents to the filtered skills and assign values
    const skillComponents = skillsFiltered.map((skill, key) =>
    (

      <Skill key={key}
      name={skill.name}
      desc={skill.desc}
      tier={skill.tier}
      id={skill.key}
      skillType={skill.skillType}
      id={skill.key}
      selectSkill={selectSkill}
      selectedSkillIndex={selectedSkillIndex}  />

    ));
    return skillComponents
  };



  //Displaying the Skilltree
    return (
      <div className="skilltree">
      <Header
        setTierFilter={setTierFilter}
        tierFilter={tierFilter}
        selectedSkill={selectedSkill}
        showAddSkillVal={showAddSkillVal}
        addSkill={addSkill}
        showAddSkill={showAddSkill}
        removeSkill={removeSkill}
        selectedSkillIndex={selectedSkillIndex}/>

      <div className="main">
        <div className="row">
          <div className="column">

          {skillsList("Survival")}
        </div>
        <div className="column">
          {skillsList("Combat")}
        </div>
        <div className="column">
          {skillsList("Magic")}
        </div>
      </div>
      </div>


    </div>);
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
  selectedSkillIndex: state.selectedSkillIndex,
  showAddSkillVal: state.showAddSkillVal,
  tierFilter: state.tierFilter
  });

export default connect(mapStateToProps)(Skilltree);
