import styled from '@emotion/styled';
import { Field } from 'formik';
import { theme } from '../../styles/theme';

export const SectionName = styled.p`
  color: ${theme.colors.greyTextColor};
  margin-bottom: 16px;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    text-align: left;
  }
`;

export const LocationContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const InputLocation = styled(Field)`
  padding: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    padding: 18px;
  }
`;

export const SvgLocation = styled.svg`
  stroke: ${theme.colors.black};
  width: 20px;
  height: 18px;
  position: absolute;
  top: 10px;
  left: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    top: 18px;
    left: 15px;
  }
`;
