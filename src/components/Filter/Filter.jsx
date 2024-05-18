import { Formik, Form } from 'formik';
import {
  Check,
  EquipmentCheckboxes,
  EquipmentItem,
  EquipmentName,
  FilterTitle,
  LocationContainer,
  SearchButton,
  SectionName,
  SvgFilters,
  SvgLocation,
  VehicleSection,
} from './Filter.styles';
import svg from '../../assets/icons/icons.svg';
import SelectLocation from '../SelectLocation/SelectLocation';
import { useDispatch } from 'react-redux';
import { filterKampsByLocation } from '../../store/kampsSlice';

const dropDownOptions = [
  { key: 'Kyiv, Ukraine', value: 'Kyiv, Ukraine' },
  { key: 'Poltava, Ukraine', value: 'Poltava, Ukraine' },
  { key: 'Dnipro, Ukraine', value: 'Dnipro, Ukraine' },
  { key: 'Odesa, Ukraine', value: 'Odesa, Ukraine' },
  { key: 'Kharkiv, Ukraine', value: 'Kharkiv, Ukraine' },
  { key: 'Sumy, Ukraine', value: 'Sumy, Ukraine' },
];

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          ac: false,
          transmission: false,
          kitchen: false,
          tv: false,
          wc: false,
          van: false,
          full: false,
          alcove: false,
          location: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(filterKampsByLocation(values.location));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <SectionName>Location</SectionName>

            <LocationContainer>
              <SelectLocation
                control="select"
                name="location"
                options={dropDownOptions}
              />
              <SvgLocation>
                <use href={`${svg}#icon-map`}></use>
              </SvgLocation>
            </LocationContainer>

            <SectionName>Filters</SectionName>
            <VehicleSection>
              <FilterTitle>Vehicle equipment</FilterTitle>
              <EquipmentCheckboxes>
                <EquipmentItem checked={values.ac}>
                  <Check
                    type="checkbox"
                    name="ac"
                    checked={values.ac}
                    onChange={(e) => setFieldValue('ac', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-ac`}></use>
                  </SvgFilters>
                  <EquipmentName>AC</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.transmission}>
                  <Check
                    type="checkbox"
                    name="transmission"
                    checked={values.transmission}
                    onChange={(e) =>
                      setFieldValue('transmission', e.target.checked)
                    }
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-transmission`}></use>
                  </SvgFilters>
                  <EquipmentName>Automatic</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.kitchen}>
                  <Check
                    type="checkbox"
                    name="kitchen"
                    checked={values.kitchen}
                    onChange={(e) => setFieldValue('kitchen', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-kitchen`}></use>
                  </SvgFilters>
                  <EquipmentName>Kitchen</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.tv}>
                  <Check
                    type="checkbox"
                    name="tv"
                    checked={values.tv}
                    onChange={(e) => setFieldValue('tv', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-tv`}></use>
                  </SvgFilters>
                  <EquipmentName>TV</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.wc}>
                  <Check
                    type="checkbox"
                    name="wc"
                    checked={values.wc}
                    onChange={(e) => setFieldValue('wc', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-paper`}></use>
                  </SvgFilters>
                  <EquipmentName>WC</EquipmentName>
                </EquipmentItem>
              </EquipmentCheckboxes>
              <FilterTitle>Vehicle type</FilterTitle>
              <EquipmentCheckboxes>
                <EquipmentItem checked={values.van}>
                  <Check
                    type="checkbox"
                    name="van"
                    checked={values.van}
                    onChange={(e) => setFieldValue('van', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-camper-3`}></use>
                  </SvgFilters>
                  <EquipmentName>Van</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.full}>
                  <Check
                    type="checkbox"
                    name="full"
                    checked={values.full}
                    onChange={(e) => setFieldValue('full', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-camper-2`}></use>
                  </SvgFilters>
                  <EquipmentName>Fully Integrated</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.alcove}>
                  <Check
                    type="checkbox"
                    name="alcove"
                    checked={values.alcove}
                    onChange={(e) => setFieldValue('alcove', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-camper-1`}></use>
                  </SvgFilters>
                  <EquipmentName>Alcove</EquipmentName>
                </EquipmentItem>
              </EquipmentCheckboxes>
            </VehicleSection>
            <SearchButton type="submit">Search</SearchButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
