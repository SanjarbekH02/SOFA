import React from 'react';
import './AboutSection.css';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <div className="about-section">
            <div className="container">
                <h1 className="about-title">{t('about.title')}</h1>
                <div className="about-container">
                    <div className="image-placeholder">
                        {/* Bu yerga rasm joylashadi */}
                    </div>

                    <div className="text-content">
                        <h2>{t('about.companyName')}</h2>
                        <p className="about-description">
                            {t('about.description.line1')}<br />
                            {t('about.description.line2')}<br />
                            {t('about.description.line3')}<br />
                            {t('about.description.line4')}
                        </p>
                    </div>
                </div>
                <h2 className="about-title-bottom">{t('about.whyUs')}</h2>
                <ul className="benefits-list">
                    <li><i className="ri-user-line"></i> {t('about.benefits.personalApproach')}</li>
                    <li><i className="ri-bank-card-line"></i> {t('about.benefits.paymentOptions')}</li>
                    <li><i className="ri-service-line"></i> {t('about.benefits.trustedPartners')}</li>
                    <li><i className="ri-award-fill"></i> {t('about.benefits.peaceOfMind')}</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutSection;
