import styled from '@emotion/styled';
import { Field } from 'formik';

export const VehicleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionName = styled.p`
  color: #475467;
  margin-bottom: 16px;
`;

export const EquipmentCheckboxes = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 360px;
`;

export const SvgFilters = styled.svg`
  width: 32px;
  height: 32px;
  stroke: black;
`;

export const EquipmentItem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${(props) =>
    props.checked ? '#E44848' : 'rgba(16, 24, 40, 0.2)'};
  width: 112px;
  height: 95px;
  gap: 5px;

  &:hover {
    border-color: ${(props) =>
      props.checked ? '#E44848' : 'rgba(16, 24, 40, 0.2)'};
  }
`;
export const EquipmentName = styled.p`
  text-align: center;
`;

export const Check = styled(Field)`
  display: none;
`;
export const SearchButton = styled.button`
  width: 166px;
  padding: 16px 40px;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
  margin-top: 50px;
`;
export const FilterTitle = styled.h3`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
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
