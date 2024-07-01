import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-top: 110px;
  }
`;

export const FavoriteItem = styled.li`
  width: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 1px solid;
  border-color: ${theme.colors.borderColor};
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 750px;
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 800px;
  }
`;
export const KampPrice = styled.b`
  font-size: 24px;
  font-weight: 600;
`;

export const FavLocation = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SvgLocation = styled.svg`
  stroke: ${theme.colors.textColor};
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
export const KampImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 290px;
    height: 310px;
  }
`;

export const BtnShowMore = styled.button`
  display: flex;
  width: 170px;
  padding: 16px 40px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;

  &:hover,
  btnShowMore:focus {
    background-color: ${theme.colors.redHover};
  }
`;
export const BtnRemove = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.colors.red};
  margin-top: 50px;
  margin-left: 240px;

  &:hover {
    color: pink;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-left: 300px;
    margin-top: 100px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-left: 350px;
    margin-top: 100px;
  }
`;

export const FavoriteInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 526px;
    margin-top: 0;
    margin-left: 30px;
    align-items: flex-start;
  }
`;

export const FavDescription = styled.p`
  width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${theme.colors.greyTextColor};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 380px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 420px;
  }
`;
