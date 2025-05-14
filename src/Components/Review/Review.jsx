import React from 'react';
import './Review.css';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = t('reviews.items', { returnObjects: true });

  return (
    <section className="reviews-section">
      <h4 className="services-title-top">{t('reviews.topTitle')}</h4>
      <h2 className="title">{t('reviews.mainTitle')}</h2>
      <div className="reviews-container container">
        {reviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="review-header">
              <span className="name">{review.name}</span>
              <span className="date">{review.date}</span>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
      <button className="show-more">{t('reviews.showMore')}</button>
    </section>
  );
}
