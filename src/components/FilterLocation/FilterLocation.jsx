import { Formik, Form } from 'formik';
import {
  LocationContainer,
  SectionName,
  SvgLocation,
} from './FilterLocation.styled';
import svg from '../../assets/icons/icons.svg';
import SelectLocation from '../SelectLocation/SelectLocation';
import { useDispatch, useSelector } from 'react-redux';
import { selectKamps, selectSelectedLocation } from '../../store/selectors';
import { filterKampsByLocation } from '../../store/kampsSlice';
import { useEffect } from 'react';

export const FilterLocation = () => {
  const dispatch = useDispatch();
  const kamps = useSelector(selectKamps);
  const selectedLocation = useSelector(selectSelectedLocation);

  const uniqueLocations = [...new Set(kamps.map((kamp) => kamp.location))];

  useEffect(() => {
    if (selectedLocation) {
      dispatch(filterKampsByLocation(selectedLocation));
    }
  }, [dispatch, selectedLocation]);

  return (
    <div>
      <Formik
        initialValues={{
          location: selectedLocation || '',
        }}
        onSubmit={(values) => {
          dispatch(filterKampsByLocation(values.location));
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <SectionName>Location</SectionName>

            <LocationContainer>
              <SelectLocation
                control="select"
                name="location"
                options={uniqueLocations}
                onChange={(e) => {
                  const selectedLocation = e.target.value;
                  setFieldValue('location', selectedLocation);
                  dispatch(filterKampsByLocation(selectedLocation));
                }}
              />
              <SvgLocation>
                <use href={`${svg}#icon-map`}></use>
              </SvgLocation>
            </LocationContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};
