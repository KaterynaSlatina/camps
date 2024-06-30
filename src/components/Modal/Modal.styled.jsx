import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.modalBackgroundColor};
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.3s;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 100px;
  border-radius: 20px;
  background-color: ${theme.colors.white};
  padding: 20px;
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 40px;
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    top: 16px;
    right: 16px;
  }
`;

export const SvgClose = styled.svg`
  width: 22px;
  height: 22px;
  margin-top: 10px;
  margin-right: 20px;
  stroke: ${theme.colors.textColor};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 32px;
    height: 32px;
  }
`;
