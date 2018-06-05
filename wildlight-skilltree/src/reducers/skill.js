import * as SkillActionTypes from '../actiontypes/skill';


const initialState = {
skills : [
  {
    name: 'Agility',
    desc: 'Gain an extra dash in the dashing stamina',
    tier: '1',
    skillType: 'Survival',
    key: 1
  }, {
    name: 'Vitality',
    desc: 'Increase max health',
    tier: '1',
    skillType: 'Combat',
    key: 2
  }, {
    name: 'Second Wind',
    desc: "Replenish all health and mana when you level up",
    tier: '1',
    skillType: 'Survival',
    key: 3
  }, {
    name: 'Super Stomach',
    desc: "Increase stomach size",
    tier: '2',
    skillType: 'Survival',
    key: 4
  }, {
    name: "Grit",
    desc: "Increase max HP",
    tier: '1',
    skillType: 'Combat',
    key: 5
  }, {
    name: "Endurance",
    desc: "Increase max stamina for both arms",
    tier: '1',
    skillType: 'Combat',
    key: 6
  }, {
    name: "Power",
    desc: "Decrease power attack recharge time",
    tier: '2',
    skillType: 'Combat',
    key: 7
  }, {
    name: "Supply Drop",
    desc: "Call in a drop filled with supplies",
    tier: '3',
    skillType: 'Combat',
    key: 8
  }, {
    name: "Quick Arm",
    desc: "Decrease charge time with ranged weapons",
    tier: '2',
    skillType: 'Combat',
    key: 9
  }, {
    name: "Zen",
    desc: "Increase max Mana",
    tier: '1',
    skillType: 'Magic',
    key: 10
  }, {
    name: "Swift Casting",
    desc: "Decrease charging time for magic weapons",
    tier: '2',
    skillType: 'Magic',
    key: 11
  }, {
    name: "Energy Draw",
    desc: "Gain mana from eating food with hunger stat",
    tier: '3',
    skillType: 'Magic',
    key: 12
  }, {
    name: "Quick Draw",
    desc: "Decrease charge time with ranged weapons",
    tier: '5',
    skillType: 'Combat',
    key: 13
  }, {
    name: "Medicated",
    desc: "Increase effect of healing items",
    tier: '4',
    skillType: 'Survival',
    key: 14
  }, {
    name: "Runner",
    desc: "Increase running speed",
    tier: '5',
    skillType: 'Survival',
    key: 15
  }, {
    name: "Strong Arm",
    desc: "Increase range and speed of ranged weapons",
    tier: '4',
    skillType: 'Combat',
    key: 16
  }, {
    name: "Shieldbearer",
    desc: "Blocking uses less stamina",
    tier: '4',
    skillType: 'Combat',
    key: 17
  }, {
    name: "Pack-a-Punch",
    desc: "Increase knockback of all melee weapons",
    tier: '4',
    skillType: 'Combat',
    key: 18
  }, {
    name: "Power Draw",
    desc: "Increase knockback of all ranged weapons",
    tier: '5',
    skillType: 'Combat',
    key: 19
  }, {
    name: "Reptile Blood",
    desc: "Regenerate health over time.",
    tier: '6',
    skillType: 'Survival',
    key: 20
  }, {
    name: "Stand Strong",
    desc: "Take less knockback from enemies.",
    tier: '5',
    skillType: 'Combat',
    key: 21
  }, {
    name: "Bloodthirst",
    desc: "Deal more damage on your next strike after killing an enemy",
    tier: '6',
    skillType: 'Combat',
    key: 22
  }, {
    name: "Shield II",
    desc: "Chance to reflect arrows back at enemies when blocking",
    tier: '6',
    skillType: 'Combat',
    key: 23
  }, {
    name: "Vampire Blood",
    desc: "Chance to restore health when dealing damage",
    tier: '6',
    skillType: 'Magic',
    key: 24
  }, {
    name: "Energizer",
    desc: "Eating food recharges dashing stamina",
    tier: '4',
    skillType: 'Survival',
    key: 25
  }, {
    name: "Shade Dash",
    desc: "While dashing you are invincible",
    tier: '6',
    skillType: 'Survival',
    key: 26
  }, {
    name: "Care Package",
    desc: "A supply drop filled with food",
    tier: '5',
    skillType: 'Survival',
    key: 27
  }, {
    name: "Demolition",
    desc: "Destroying buildings is quicker",
    tier: '3',
    skillType: 'Survival',
    key: 28
  }, {
    name: "Alchemy",
    desc: "Drinking potions has stronger effects",
    tier: '6',
    skillType: 'Survival',
    key: 29
  }, {
    name: "Lumberjack",
    desc: "Chop trees quicker",
    tier: '4',
    skillType: 'Survival',
    key: 30
  }, {
    name: "Shielded",
    desc: "Magic shields drain less mana",
    tier: '4',
    skillType: 'Magic',
    key: 31
  }, {
    name: "Combustion",
    desc: "Spontaneously combust into flames",
    tier: '6',
    skillType: 'Magic',
    key: 32
  }, {
    name: "Fire Trail",
    desc: "Leave behind a trail of fire when you dash",
    tier: '5',
    skillType: 'Magic',
    key: 33
  }, {
    name: "Sparky",
    desc: "Gain an electric orb pet",
    tier: '4',
    skillType: 'Magic',
    key: 34
  },

  ],
  selectedSkillIndex: -1,
  showAddSkillVal: false,
  lastSkillId: 35,
  tierFilter: '1'
}

export default function Skill(state = initialState, action) {

  switch (action.type) {
    //Add a new object to state. Temporary for now until I set up a database
    case SkillActionTypes.ADD_SKILL:
      {
        const addSkillList = [
          ...state.skills, {
            name: action.name,
            desc: action.desc,
            tier: action.tier,
            skillType: action.skillType,
            key: state.lastSkillId
          }
        ];
        return {
          ...state,
          skills: addSkillList,
          lastSkillId: state.lastSkillId + 1,
          showAddSkillVal: false,
          selectedSkillIndex: state.lastSkillId
        };
      }
      //Show add new skill menu when clicked
    case SkillActionTypes.SHOW_ADD:
      return {
        ...state,
        showAddSkillVal: !state.showAddSkillVal
      };
      //set which Tier of Skill is being filtered
    case SkillActionTypes.SET_TIER_FILTER:
      return {
        ...state,
        tierFilter: action.tier
      };
      //set the selectedSkillIndex to the skill being selected
    case SkillActionTypes.SELECT_SKILL:
      return {
        ...state,
        selectedSkillIndex: action.key
      };
      //remove the skill that is selected
    case SkillActionTypes.REMOVE_SKILL:
      {
        let selectedSkill = state.skills.findIndex(skills => skills.key === state.selectedSkillIndex);
        const removeSkillList = [
          ...state.skills.slice(0, selectedSkill),
          ...state.skills.slice(selectedSkill + 1)
        ];
        return {
          ...state,
          skills: removeSkillList,
          selectedSkillIndex: -1
        };
      }

    default:
      return state;
  }
}
