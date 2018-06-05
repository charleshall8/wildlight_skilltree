import * as SkillActionTypes from '../actiontypes/skill';

//pass parameters into actiontypes

export const addSkill = (name, desc, tier, skillType) => {
  return {
    type: SkillActionTypes.ADD_SKILL,
    name,
    desc,
    tier,
    skillType
  };
};

  export const showAddSkill = showAddSkillVal => {
    return {
      type: SkillActionTypes.SHOW_ADD,
      showAddSkillVal
    };
};

export const setTierFilter = tier => {
  return {
    type: SkillActionTypes.SET_TIER_FILTER,
    tier
  };
};

export const selectSkill = key => {
  return {
    type: SkillActionTypes.SELECT_SKILL,
    key
  };
};

export const removeSkill = key => {
  return {
    type: SkillActionTypes.REMOVE_SKILL,
    key
  };
};
