import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import BookingDatePicker from './BookingDatePicker';
import {
  BookingDateContainer,
  BookingField,
  BookingFieldComment,
  BookingFormContainer,
  Error,
  FormInputs,
  FormText,
  SendBookingButton,
  SvgCalendar,
} from './BookingForm.styled';
import svg from '../../assets/icons/icons.svg';

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    bookingDate: Yup.date()
      .min(new Date(), 'Please, choose the date')
      .required('This field is required'),
    comment: Yup.string(),
  });

  return (
    <BookingFormContainer>
      <FormText>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </FormText>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInputs>
              <div>
                <label htmlFor="name"> </label>
                <BookingField name="name" type="text" placeholder="Name" />

                <Error name="name" component="div" />
              </div>

              <div>
                <label htmlFor="email"> </label>
                <BookingField name="email" type="email" placeholder="Email" />

                <Error name="email" component="div" />
              </div>

              <BookingDateContainer>
                <SvgCalendar>
                  <use href={`${svg}#icon-calendar`}></use>
                </SvgCalendar>
                <label htmlFor="bookingDate"> </label>
                <BookingField
                  name="bookingDate"
                  type="date"
                  component={BookingDatePicker}
                />
                <Error name="bookingDate" component="div" />
              </BookingDateContainer>

              <div>
                <label htmlFor="comment"></label>
                <BookingFieldComment
                  name="comment"
                  as="textarea"
                  placeholder="Comment"
                />

                <Error name="comment" component="div" />
              </div>
            </FormInputs>

            <SendBookingButton type="submit" disabled={isSubmitting}>
              Send
            </SendBookingButton>
          </Form>
        )}
      </Formik>
    </BookingFormContainer>
  );
};
export default BookingForm;
