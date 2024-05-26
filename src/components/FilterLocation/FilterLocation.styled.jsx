import styled from '@emotion/styled';
import { Field } from 'formik';

export const SectionName = styled.p`
  color: #475467;
  margin-bottom: 16px;
`;

export const LocationContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const InputLocation = styled(Field)`
  padding: 18px;
`;

export const SvgLocation = styled.svg`
  stroke: black;
  width: 20px;
  height: 18px;
  position: absolute;
  top: 18px;
  left: 15px;
`;
