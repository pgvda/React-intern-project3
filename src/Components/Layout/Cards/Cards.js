import { cardData } from '../../../data/cardData'; 

import './Cards.scss';

const Cards = () => {
  return (
    <div className="card_list">
      {cardData.map((card, index) => (
        <div key={index} className="card_main_div">
          <div className="img_section">
            <img src={card.image} alt={card.heading} />
          </div>
          <div className="heading_div">
            <h2>{card.heading}</h2>
          </div>
          <div className="description_div">
            <p>{card.description}</p>
          </div>
          <div className="btn_section">
            <button>{card.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
