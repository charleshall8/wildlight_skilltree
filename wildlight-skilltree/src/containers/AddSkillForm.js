import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddSkillForm extends Component {
  static propTypes = {
    addSkill: PropTypes.func.isRequired
  };

  state = {
    name: '',
    desc: '',
    tier: '1',
    skillType: 'Survival'
  };

  //Validate if form was filled out to show submit button
  getValidationState() {
    if (this.state.name.length === 0 || this.state.desc.length === 0) {
      return "invalidated-submit"
    } else
      return null;
    }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({name: name});
  };
  onDescChange = (e) => {
    const desc = e.target.value;
    this.setState({desc: desc});
  };
  onTierChange = (e) => {
    const tier = e.target.value;
    this.setState({tier: tier});
  };
  onTypeChange = (e) => {
    const skillType = e.target.value;
    this.setState({skillType: skillType});
  };

  addSkill = (e) => {
    if (e)
      e.preventDefault();
    this.props.addSkill(this.state.name, this.state.desc, this.state.tier, this.state.skillType);
    this.setState({name: '', desc: '', tier: '1', skillType: 'Survival'});
  };

  render() {
    if (this.props.showAddSkillVal === true) {
      return (<div className="add-skill-form">
        <form onSubmit={this.addSkill}>
          <input className="name-input" type="text" maxLength="14" value={this.state.name} onChange={this.onNameChange} placeholder="Skill Name"/>

          <select onChange={this.onTierChange} value={this.state.tier}>
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
            <option value="4">Tier 4</option>
            <option value="5">Tier 5</option>
            <option value="6">Tier 6</option>

          </select>

          <select onChange={this.onTypeChange} value={this.state.skillType}>
            <option value="Survival">Survival</option>
            <option value="Combat">Combat</option>
            <option value="Magic">Magic</option>
          </select>

          <input className='description-input' type="text" maxLength="110" value={this.state.desc} onChange={this.onDescChange} placeholder="Description"/>

          <input className={this.getValidationState()} type="submit" value="Add Skill"/>
        </form>
      </div>);
    } else
      return (null);

    }
  }
