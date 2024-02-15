import React, { useState } from 'react';
import './style.scss';
import { Button } from '../button/Button';
import dots from '../../assets/images/thripleDots.svg';
import CustomDropdown from '../dropdown/CustomDropdown';
import clipleft from '../../assets/images/clipleft.svg';
import clipright from '../../assets/images/clipright.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    dropdown: '',
    textarea: '',
  });

  const options = [
    { value: '150-250k', label: '150-250k' },
    { value: '250-500k', label: '250-500k' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className={'inputs-container'}>
        <div className={'name-box'}>
          <label htmlFor="input1">How should we call you?</label>
          <div className={'custom-input-box'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <input
              type="text"
              placeholder={'Dave?'}
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
        <div className={'discord-address'}>
          <label htmlFor="input2">Your Discord?</label>
          <div className={'custom-input-box'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <input
              placeholder={'@davethecreator'}
              type="text"
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleChange}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
        <div className={'project-name'}>
          <label htmlFor="input3">Project name</label>
          <div className={'custom-input-box'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <input
              placeholder={'[The best movie]'}
              type="text"
              id="input3"
              name="input3"
              value={formData.input3}
              onChange={handleChange}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
        <div className={'budget-box'}>
          <label htmlFor={'custom-dropdown'}>Budget</label>
          <div className={'btn-wrapper'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <CustomDropdown
              options={options}
              value={formData.dropdown}
              onChange={(value) => handleChange({ target: { name: 'dropdown', value } })}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
        {/*<div className={'budget-box'}>*/}
        {/*  <label htmlFor="dropdown">Budget</label>*/}
        {/*  <select id="dropdown" name="dropdown" value={formData.dropdown} onChange={handleChange}>*/}
        {/*    <option value="" disabled hidden className={'start-option'}>*/}
        {/*      Select an option*/}
        {/*    </option>*/}
        {/*    <option value="option1" className="custom-option">*/}
        {/*      Option 1*/}
        {/*    </option>*/}
        {/*    <option value="option2" className="custom-option">*/}
        {/*      Option 2*/}
        {/*    </option>*/}
        {/*  </select>*/}
        {/*</div>*/}
      </div>
      <label htmlFor="textarea" className={'textarea-label'}>
        Your concept
      </label>
      <textarea
        className={'textarea-form'}
        placeholder={'It all starts far far away...'}
        id="textarea"
        name="textarea"
        value={formData.textarea}
        onChange={handleChange}></textarea>
      <div className={'button-form-box'}>
        <img src={dots} alt={'dots-form'} className={'dots-form'} />
        <div className={'hr-line-form'} />
        <Button text={'submit'} type={'submit'} style={{ width: '250px' }} />
      </div>
    </form>
  );
};

export default Form;
