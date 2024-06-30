import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { theme } from '../../styles/theme';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    align-items: flex-start;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
  }
`;

export const VehicleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
    align-items: stretch;
  }
`;

export const SectionName = styled.p`
  color: ${theme.colors.greyTextColor};
  margin-bottom: 16px;
`;

export const EquipmentCheckboxes = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 280px;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
  }
`;

export const SvgFilters = styled.svg`
  width: 28px;
  height: 28px;
  stroke: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 32px;
    height: 32px;
  }
`;

export const EquipmentItem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  font-size: 14px;
  border-color: ${(props) =>
    props.checked ? `${theme.colors.red}` : `${theme.colors.borderColor}`};
  width: 80px;
  height: 70px;
  gap: 5px;

  &:hover {
    border-color: ${theme.colors.red};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    width: 112px;
    height: 95px;
  }
`;

export const EquipmentName = styled.p`
  text-align: center;
`;

export const Check = styled(Field)`
  display: none;
`;

export const SearchButton = styled.button`
  width: 130px;
  padding: 12px 30px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  margin-top: 50px;

  &:hover,
  SearchButton:focus {
    background-color: ${theme.colors.redHover};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 166px;
    padding: 16px 40px;
    font-size: 16px;
  }
`;
export const FilterTitle = styled.h3`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

export const LocationContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const InputLocation = styled(Field)`
  padding: 18px;
`;

export const SvgLocation = styled.svg`
  stroke: ${theme.colors.black};
  width: 20px;
  height: 18px;
  position: absolute;
  top: 18px;
  left: 15px;
`;
