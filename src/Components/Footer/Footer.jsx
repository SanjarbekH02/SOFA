import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-container">
            <h3 className="services-title-top">{t('footer.contacts')}</h3>
            <h1 className="contact-heading">{t('footer.getInTouch')}</h1>
            <div className="footer">
                <div className="contact-info">
                    <p><i className="ri-map-pin-line"></i> {t('footer.address')}</p>
                    <p><i className="ri-phone-line"></i> +998 95 551 8888</p>
                    <p><i className="ri-phone-line"></i> +998 98 111 00 45</p>
                    <p><i className="ri-mail-line"></i> sofamarva.chorsu@gmail.com</p>
                </div>

                <h2 className="social-title">{t('footer.socialTitle')}</h2>
                <div className="social-links">
                    <p><i className="ri-telegram-line"></i> sofamarva.chorsu</p>
                    <p><i className="ri-instagram-line"></i> sofamarva.chorsu</p>
                    <p><i className="ri-tiktok-line"></i> sofamarva.chorsu</p>
                    <p><i className="ri-facebook-box-line"></i> sofamarva.chorsu</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
