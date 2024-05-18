import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
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
  background-color: #ffffff;
  padding: 40px;
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const SvgClose = styled.svg`
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-right: 20px;
  stroke: #101828;
`;
