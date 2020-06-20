import React from 'react';
import './Card.scss';

const TipCard = ({ tip }) => (
  <div className={"tip-card tip-card__" + tip.name} 
        id={"tip-card__" + tip.tips[0].id}>

      <a href={tip.tips[0].url} target="_blank" 
          title={"Assistir " + tip.tips[0].title} 
          className="tip-card__link">

        <figure className="tip-card__thumbnail">
          <img alt={"Logo " + tip.tips[0].title} 
          src={tip.tips[0].imageUrl} />
        </figure>

        <h3 className="tip-card__title">{tip.tips[0].title}</h3>

        <strong className="tip-card__cta">{tip.cta}</strong>
      </a>
  </div>
);

export default TipCard;
