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
  width: 800px;
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid;
  border-color: ${theme.colors.borderColor};
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
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
  margin-left: 300px;

  &:hover {
    color: pink;
  }
`;

export const FavoriteInfo = styled.div`
  margin-left: 30px;
  width: 526px;

  display: flex;
  flex-direction: column;
`;
export const FavDescription = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${theme.colors.greyTextColor};
  width: 420px;
`;
