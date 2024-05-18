// import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BookingDatepicker } from './BookingForm.styled';

export default function BookingDatePicker({ field, form }) {
  return (
    <div>
      <BookingDatepicker
        {...field}
        selected={field.value}
        onChange={(val) => form.setFieldValue(field.name, val)}
        placeholderText="Booking date"
      />
    </div>
  );
}
