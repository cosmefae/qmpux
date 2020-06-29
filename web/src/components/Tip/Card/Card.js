import React from 'react';
import './Card.scss';

const TipCard = ({ tip,category }) => {
  console.log(tip);
  return (
    <div className={"g-col g-span4 tip-card"} 
          id={"tip-card__" + tip.id}>

        <a href={tip.url} target="_blank" 
            rel="noopener noreferrer" 
            title={"Assistir " + tip.title} 
            className="tip-card__link">

          <figure className="tip-card__thumbnail">
            <img alt={"Logo " + tip.title} 
            src={tip.imageUrl} />
          </figure>

          <h3 className="tip-card__title">{tip.title}</h3>

          <strong className="tip-card__cta">{category.cta}</strong>
        </a>
    </div>
  );
};

export default TipCard;
