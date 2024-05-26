import styled from '@emotion/styled';
import camper from '../../assets/img/Camper.jpg';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
`;

export const HeroImgContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${camper});
  padding: 112px 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin-top: 30px;
  color: beige;
`;

export const HeroTitle = styled.h1`
  font-size: 50px;
`;

export const HeroText = styled.p`
  font-size: 30px;
`;

export const BtnCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 166px;
  padding: 16px 40px;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  btnShowMore:focus {
    background-color: #d84343;
  }
`;
