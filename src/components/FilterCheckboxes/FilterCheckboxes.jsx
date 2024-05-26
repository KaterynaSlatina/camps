import { Formik, Form } from 'formik';
import {
  Check,
  EquipmentCheckboxes,
  EquipmentItem,
  EquipmentName,
  FilterTitle,
  SearchButton,
  SectionName,
  SvgFilters,
  VehicleSection,
} from './FilterCheckboxes.styles';
import svg from '../../assets/icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { filterKampsByOptions, restoreFilters } from '../../store/kampsSlice';
import {
  selectFilterOptions,
  selectSelectedLocation,
} from '../../store/selectors';
import { useEffect } from 'react';

export const FilterCheckboxes = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector(selectFilterOptions);
  const selectedLocation = useSelector(selectSelectedLocation);

  useEffect(() => {
    dispatch(
      restoreFilters({
        selectedLocation,
        filterOptions,
      })
    );
  }, [dispatch, selectedLocation, filterOptions]);

  return (
    <div>
      <Formik
        initialValues={{
          bathroom: filterOptions.bathroom || false,
          kitchen: filterOptions.kitchen || false,
          microwave: filterOptions.microwave || false,
          freezer: filterOptions.freezer || false,
          tv: filterOptions.tv || false,
          wc: filterOptions.wc || false,
          van: filterOptions.van || false,
          full: filterOptions.full || false,
          alcove: filterOptions.alcove || false,
        }}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(filterKampsByOptions(values));
          resetForm();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <SectionName>Filters</SectionName>
            <VehicleSection>
              <FilterTitle>Vehicle equipment</FilterTitle>
              <EquipmentCheckboxes>
                <EquipmentItem checked={values.bathroom ? true : false}>
                  <Check
                    type="checkbox"
                    name="bathroom"
                    onChange={(e) =>
                      setFieldValue('bathroom', e.target.checked)
                    }
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-shower`}></use>
                  </SvgFilters>
                  <EquipmentName>Shower</EquipmentName>
                </EquipmentItem>

                <EquipmentItem checked={values.kitchen ? true : false}>
                  <Check
                    type="checkbox"
                    name="kitchen"
                    onChange={(e) => setFieldValue('kitchen', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-kitchen`}></use>
                  </SvgFilters>
                  <EquipmentName>Kitchen</EquipmentName>
                </EquipmentItem>

                <EquipmentItem checked={values.microwave ? true : false}>
                  <Check
                    type="checkbox"
                    name="microwave"
                    onChange={(e) =>
                      setFieldValue('microwave', e.target.checked)
                    }
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-microwave`}></use>
                  </SvgFilters>
                  <EquipmentName>Microwave</EquipmentName>
                </EquipmentItem>

                <EquipmentItem checked={values.freezer ? true : false}>
                  <Check
                    type="checkbox"
                    name="freezer"
                    onChange={(e) => setFieldValue('freezer', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-freezer`}></use>
                  </SvgFilters>
                  <EquipmentName>Freezer</EquipmentName>
                </EquipmentItem>

                <EquipmentItem checked={values.tv ? true : false}>
                  <Check
                    type="checkbox"
                    name="tv"
                    onChange={(e) => setFieldValue('tv', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-tv`}></use>
                  </SvgFilters>
                  <EquipmentName>TV</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.wc ? true : false}>
                  <Check
                    type="checkbox"
                    name="wc"
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
                <EquipmentItem checked={values.van ? true : false}>
                  <Check
                    type="checkbox"
                    name="van"
                    onChange={(e) => setFieldValue('van', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-camper-3`}></use>
                  </SvgFilters>
                  <EquipmentName>Van</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.full ? true : false}>
                  <Check
                    type="checkbox"
                    name="full"
                    onChange={(e) => setFieldValue('full', e.target.checked)}
                  />
                  <SvgFilters>
                    <use href={`${svg}#icon-camper-2`}></use>
                  </SvgFilters>
                  <EquipmentName>Fully Integrated</EquipmentName>
                </EquipmentItem>
                <EquipmentItem checked={values.alcove ? true : false}>
                  <Check
                    type="checkbox"
                    name="alcove"
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
