import { NavLink } from 'react-router-dom';
import Pet from '../../images/petPhoto/pet-photo-small.jpg';
import Icon from '../../utils/Icon/Icon';
import React, { useState } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice'

const NoticeCategoryItem = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(showModal =>!showModal);
  };

  return (
    <div>
      <img src={Pet} alt="pet" />
      <button type="button">
        <Icon name="heart" color="var(--dark-blue)" size={18} />
      </button>
      <NavLink to="/add-pet">Add pet</NavLink>
      <h3>Сute dog looking for a home</h3>
      <button type="button" onClick={openModal}>Learn more</button>
      <ModalNotice showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NoticeCategoryItem;
