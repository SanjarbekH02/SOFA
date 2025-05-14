import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import HeroImg from '../../images/sofa.png'
import Leaf from '../../images/barg.png'
import LeafRight from '../../images/barg2.png'
import Ru from '../../images/ru.svg';
import En from '../../images/en.svg';
import Uz from '../../images/uz.png';
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const [selected, setSelected] = useState({ label: 'Ru', value: 'ru' });
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);
  const [flag, setFlag] = useState(Ru);
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (label, value, img) => {
    setSelected({ label, value, img });
    setOpen(false);
    setFlag(img);
    i18n.changeLanguage(value);
  };
  return (
    <div className="hero">
      <header className="container navbar">
        <nav>
          {/* Burger menyu tugmasi */}
          <div className={`menu-toggle ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(!navOpen)}>
            <div></div>
          </div>

          {/* Navigation links */}
          <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
            <li>{t('aboutNav')}</li>
            <li>{t('servicesNav')}</li>
            <li>{t('reviewsNav')}</li>
            <li>{t('contactsNav')}</li>
          </ul>

          {/* Language select */}
          <div ref={selectRef} className="language-select">
            <div className="selected" onClick={() => setOpen(!open)}>
              <img className="flag-img" src={flag} alt="" />
              {selected ? selected.label : 'Ru'}
            </div>
            {open && (
              <div className="options">
                <div onClick={() => handleSelect("UZ", "uz", Uz)} className="option">
                  <img className="flag-img" src={Uz} alt="uz" /> UZ
                </div>
                <div onClick={() => handleSelect("EN", "en", En)} className="option">
                  <img className="flag-img" src={En} alt="en" /> EN
                </div>
                <div onClick={() => handleSelect("RU", "ru", Ru)} className="option">
                  <img className="flag-img" src={Ru} alt="ru" /> RU
                </div>
              </div>
            )}
          </div>
        </nav>

      </header>

      <div className="hero-content">
        <img src={HeroImg} className="hero-img" />
        <p className="description">
          {t('hero.description.line1')}<br />
          {t('hero.description.line2')}<br />
          {t('hero.description.line3')}
        </p>
        <button className="learn-more-btn">{t('hero.learnMore')}</button>
      </div>
      <img src={Leaf} alt="" className="leaf" />
      <img src={LeafRight} alt="" className="leaf-right" />
    </div>
  );
};

export default HeroSection;
