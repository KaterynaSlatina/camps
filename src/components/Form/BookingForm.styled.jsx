import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { theme } from '../../styles/theme';

export const BookingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 10px;
  padding: 18px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 24px;
    width: 400px;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 24px;
    width: 400px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 448px;
  }
`;

export const BookingFormTitle = styled.h2`
  font-size: 18px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 20px;
  }
`;

export const FormText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookingFormText = styled.p`
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const BookingField = styled(Field)`
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.formFieldBackground};
  padding: 18px;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    width: 360px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 400px;
  }
`;
export const BookingFieldComment = styled(Field)`
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.formFieldBackground};
  padding: 18px;
  min-height: 114px;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    width: 360px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 400px;
  }
`;
export const FormLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    align-items: center;
  }
`;

export const BookingDatepicker = styled(DatePicker)`
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.formFieldBackground};
  padding: 18px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 360px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 400px;
  }
`;
export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const SendBookingButton = styled.button`
  display: flex;
  background-color: ${theme.colors.red};
  padding: 16px 60px;
  width: 160px;
  border: none;
  border-radius: 200px;
  color: ${theme.colors.white};
  margin-top: 20px;
`;

export const BookingDateContainer = styled.div`
  position: relative;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const SvgCalendar = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 15px;
  left: 175px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    top: 15px;
    left: 326px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    left: 365px;
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${theme.colors.red};
`;
