import { useEffect, useRef } from 'react';
import svg from '../../assets/icons/icons.svg';
import {
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalWrapper,
  SvgClose,
} from './Modal.styled';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    });
  });

  const backdrop = useRef();

  const handleClickOutside = (event) => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = '';
    document.body.style.position = '';
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalWrapper onClick={handleClickOutside} ref={backdrop}>
            <ModalContent>
              <ModalCloseBtn onClick={() => onClose()}>
                <SvgClose>
                  <use href={`${svg}#icon-close`}></use>
                </SvgClose>
              </ModalCloseBtn>
              {children}
            </ModalContent>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
  );
}
