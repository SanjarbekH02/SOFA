import React from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';

import Images1 from '../../images/oae.jpg';
import Images2 from '../../images/samarqand.jpg';
import Images3 from '../../images/umra.jpg';
import Images4 from '../../images/kurs.jpg';
import Images5 from '../../images/visa.jpg';
import Images6 from '../../images/bilet.jpg';
import Leaf from '../../images/barg3.png';
import Leaf2 from '../../images/air.png';
import Leaf3 from '../../images/barg5.png';
import Leaf4 from '../../images/barg4.png';

const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('services.externalTourism.title'),
            points: [
                t('services.externalTourism.point1'),
                t('services.externalTourism.point2')
            ],
            image: Images1,
        },
        {
            title: t('services.internalTourism.title'),
            points: [
                t('services.internalTourism.point1'),
                t('services.internalTourism.point2')
            ],
            image: Images2,
        },
        {
            title: t('services.umrah.title'),
            points: [
                t('services.umrah.point1'),
                t('services.umrah.point2'),
                t('services.umrah.point3')
            ],
            image: Images3,
        },
        {
            title: t('services.courses.title'),
            points: [
                t('services.courses.point1'),
                t('services.courses.point2'),
                t('services.courses.point3')
            ],
            image: Images4,
        },
        {
            title: t('services.visa.title'),
            points: [
                t('services.visa.point1'),
                t('services.visa.point2'),
                t('services.visa.point3')
            ],
            image: Images5,
        },
        {
            title: t('services.tickets.title'),
            points: [
                t('services.tickets.point1'),
                t('services.tickets.point2'),
                t('services.tickets.point3')
            ],
            image: Images6,
        },
    ];

    return (
        <div className="services-section">
            <h3 className="services-title-top">{t('services.topTitle')}</h3>
            <h2 className="services-title">{t('services.mainTitle')}</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img className='card-img' src={service.image} alt="" />
                        <div>
                            <h3>{service.title}</h3>
                            <ul>
                                {service.points.map((point, i) => (
                                    <li key={i}>▸ {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <img className='leaf1' src={Leaf} alt="" />
            <img className='leaf2' src={Leaf2} alt="" />
            <img className='leaf3' src={Leaf3} alt="" />
            <img className='leaf4' src={Leaf4} alt="" />
        </div>
    );
};

export default ServicesSection;
