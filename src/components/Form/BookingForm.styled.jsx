import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const BookingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
`;

export const FormText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const BookingField = styled(Field)`
  border-radius: 10px;
  border: none;
  background-color: rgba(16, 24, 40, 0.06);
  padding: 18px;
  width: 400px;
`;
export const BookingFieldComment = styled(Field)`
  border-radius: 10px;
  border: none;
  background-color: rgba(16, 24, 40, 0.06);
  padding: 18px;
  width: 400px;
  min-height: 114px;
`;

export const BookingDatepicker = styled(DatePicker)`
  border-radius: 10px;
  border: none;
  background-color: rgba(16, 24, 40, 0.06);
  padding: 18px;
  width: 400px;
`;
export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const SendBookingButton = styled.button`
  display: flex;
  background-color: #e44848;
  padding: 16px 60px;
  width: 160px;
  border: none;
  border-radius: 200px;
  color: white;
  margin-top: 20px;
`;

export const BookingDateContainer = styled.div`
  position: relative;
`;

export const SvgCalendar = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 15px;
  left: 365px;
`;
export const Error = styled(ErrorMessage)`
  color: #e44848;
`;
