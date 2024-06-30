import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ContainerFeatures = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    width: 450px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    width: 902px;
  }
`;

export const FeatureList = styled.ul`
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 430px;
  }
`;
export const FeatureItem = styled.li`
  display: flex;
  gap: 7px;
  background-color: ${theme.colors.greyBackgroundColor};
  padding: 12px 18px;
  border-radius: 100px;
  justify-content: center;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;
export const SvgCard = styled.svg`
  stroke: ${theme.colors.black};
  width: 20px;
  height: 20px;
`;
export const VehicleDetailsTittle = styled.h3`
  margin-bottom: 48px;
`;
export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 280px;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 430px;
    font-size: 16px;
  }
`;
export const VehicleDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const FeatureLeftContainer = styled.div``;
