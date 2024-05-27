import styled from '@emotion/styled';
import camper from '../../assets/img/Camper.jpg';
import { Link, NavLink } from 'react-router-dom';

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

export const PopularQuestionsContainer = styled.div`
  margin: 60px;
  border: 1px solid;
  border-color: rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
`;

export const PopularQuestionsTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
`;

export const Questions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const QuestionItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f2f4f7;
  border-radius: 20px;
  padding: 20px;
`;

export const LinkToCatalog = styled(NavLink)`
  color: #e44848;

  &:hover,
  :focus {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const SvgHome = styled.svg`
  width: 50px;
  height: 50px;
`;

export const QuestionAndSvg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
