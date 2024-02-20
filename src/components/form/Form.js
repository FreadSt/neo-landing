import React, { useRef, useState } from 'react';
import './style.scss';
import { Button } from '../button/Button';
import dots from '../../assets/images/thripleDots.svg';
import CustomDropdown from '../dropdown/CustomDropdown';
import clipleft from '../../assets/images/clipleft.svg';
import clipright from '../../assets/images/clipright.svg';
import emailjs from '@emailjs/browser';
import bgBorder from '../../assets/images/buttonSvg.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    discord_name: '',
    best_movie: '',
    budget: '',
    concept: '',
  });
  const [isError, setError] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    try {
      console.log('The email is valid');
      emailjs
        .sendForm('service_yfracbb', 'template_hjypvh8', form.current, 'Z9T9c4TGtpcAEIrXq')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      setIsSubmit(true);
    } catch (err) {
      setError(err);
    }
  };
  const form = useRef();

  return (
    <form className="form-container" onSubmit={handleSubmit} ref={form}>
      <div className={'inputs-container'}>
        <div className={'name-box'}>
          <label htmlFor="user_name">How should we call you?</label>
          <div className={'custom-input-box'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <input
              type="text"
              placeholder={'Dave?'}
              id="input1"
              name={'user_name'}
              value={formData.user_name}
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
              name="discord_name"
              value={formData.discord_name}
              onChange={handleChange}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
        <div className={'project-name'}>
          <label htmlFor="best_movie">Project name</label>
          <div className={'custom-input-box'}>
            <img src={clipleft} alt={'inp-clip-l'} />
            <input
              placeholder={'[The best movie]'}
              type="text"
              id="input3"
              name="best_movie"
              value={formData.best_movie}
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
              name={'budget'}
              options={options}
              value={formData.budget}
              onChange={(value) => handleChange({ target: { name: 'budget', value } })}
            />
            <img src={clipright} alt={'inp-clip-r'} />
          </div>
        </div>
      </div>
      <label htmlFor="textarea" className={'textarea-label'}>
        Your concept
      </label>
      <textarea
        className={'textarea-form'}
        placeholder={'It all starts far far away...'}
        id="textarea"
        name="concept"
        value={formData.concept}
        onChange={handleChange}></textarea>
      <div className={'button-form-box'}>
        <img src={dots} alt={'dots-form'} className={'dots-form'} />
        <div className={'hr-line-form'} />
        <div className={'button-bg-container'}>
          <img src={bgBorder} alt={'bg-form-btn-border'} className={'background-btn-form'} />
          <button type="submit" className={'submit-btn'} onClick={handleSubmit}>
            <span>submit</span>
          </button>
        </div>
        {/*<Button text={'submit'} type={'submit'} width={'210px'} />*/}
      </div>
    </form>
  );
};

export default Form;
