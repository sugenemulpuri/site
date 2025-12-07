import React, { useState } from 'react';
import Modal from '../../Modal';
import "./HoustonCards.css";

function HoustonCard({ card }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="HoustonCard" tabIndex="0" onClick={() => setOpen(true)}>
        <img className="CardImage" src={card.image} alt={card.description} />
        <div className="overlay">
          <div>
            <div className="subtitle">{card.description}</div>
          </div>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <img className="CardImage" src={card.image} alt={card.description} />
        <div className="overlay">
          
        </div>
      </Modal>
    </>
  );

  //The primary function of this component is to create a list component of how each card will render, with distinct properties in the src and alt attributes of the image. The modal component is utilized to account for clicking on the image to get an overlay view of it.
}



export default HoustonCard;
