import styled from '@emotion/styled';
import camper from '../../assets/img/Camper.jpg';
import { Link, NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 767px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
  max-width: 1440px;
`;

export const HeroImgContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${camper});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 100px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 112px 400px;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  color: beige;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-top: 30px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 25px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 50px;
  }
`;

export const HeroText = styled.p`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 30px;
  }
`;

export const BtnCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  width: 100px;
  padding: 8px 20px;
  font-size: 12px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 166px;
    padding: 16px 40px;
    font-size: 16px;
  }

  &:hover,
  btnShowMore:focus {
    background-color: ${theme.colors.redHover};
  }
`;

export const PopularQuestionsContainer = styled.div`
  margin: 30px;
  border: 1px solid;
  border-color: ${theme.colors.borderColor};
  border-radius: 20px;
  padding: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 40px;
    font-size: 28px;
    margin: 60px;
    padding: 24px;
  }
`;

export const PopularQuestionsTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 40px;
    font-size: 28px;
  }
`;

export const QuestionTitle = styled.h3`
  font-size: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 26px;
  }
`;

export const AnswerText = styled.p`
  font-size: 15px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 22px;
  }
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
  background-color: ${theme.colors.greyBackgroundColor};
  border-radius: 20px;
  padding: 20px;
`;

export const LinkToCatalog = styled(NavLink)`
  color: ${theme.colors.red};

  &:hover,
  :focus {
    text-shadow: 2px 2px 5px ${theme.colors.textShadow};
  }
`;

export const SvgHome = styled.svg`
  width: 30px;
  height: 30px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 50px;
    height: 50px;
  }
`;

export const QuestionAndSvg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
