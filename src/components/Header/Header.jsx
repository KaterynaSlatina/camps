import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ButtonBurger, HeaderContainer, SvgBurger } from './Header.styled';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import svg from '../../assets/icons/icons.svg';
import Contacts from './Contacts/Contacts';

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <HeaderContainer>
      <NavLink to="/">Camp Rent</NavLink>

      {isTablet ? (
        <>
          <Navbar />
          <Contacts />
        </>
      ) : (
        <>
          <ButtonBurger onClick={toggleModal}>
            <SvgBurger>
              <use href={`${svg}#icon-burger`}></use>
            </SvgBurger>
          </ButtonBurger>

          <Modal isOpen={isOpenModal} onClose={toggleModal}>
            <Navbar toggleModal={toggleModal} />
          </Modal>
        </>
      )}
    </HeaderContainer>
  );
}
