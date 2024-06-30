import styled from '@emotion/styled';
import { Field } from 'formik';
import { theme } from '../../styles/theme';

export const SelectLocationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
`;

export const LocationInput = styled(Field)`
  width: 260px;
  padding: 12px 12px 12px 40px;
  background-color: ${theme.colors.formFieldBackground};
  border-radius: 10px;
  border: none;
  appearance: none;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
    padding: 18px 18px 18px 40px;
  }
`;
