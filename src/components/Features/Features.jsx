import svg from '../../assets/icons/icons.svg';
import BookingForm from '../Form/BookingForm';
import {
  ContainerFeatures,
  FeatureItem,
  FeatureLeftContainer,
  FeatureList,
  SvgCard,
  VehicleDetailsItem,
  VehicleDetailsList,
  VehicleDetailsTittle,
} from './Features.styled';

export default function Features({ kamps }) {
  return (
    <ContainerFeatures>
      <FeatureLeftContainer>
        <FeatureList>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-adults`}></use>
            </SvgCard>
            {kamps.adults} adults
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-transmission`}></use>
            </SvgCard>
            {kamps.transmission}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-ac`}></use>
            </SvgCard>
            {kamps.details.airConditioner > 0 ? 'AC' : null}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-petrol`}></use>
            </SvgCard>
            {kamps.engine}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-kitchen`}></use>
            </SvgCard>
            {kamps.details.kitchen > 0 ? 'Kitchen' : null}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-bed`}></use>
            </SvgCard>
            {kamps.details.beds} beds
          </FeatureItem>
          {kamps.details.CD > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-cd`}></use>
              </SvgCard>
              {kamps.details.CD} CD
            </FeatureItem>
          ) : null}
          {kamps.details.TV > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-tv`}></use>
              </SvgCard>
              {kamps.details.TV > 0 ? 'TV' : null}
            </FeatureItem>
          ) : null}
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-radio`}></use>
            </SvgCard>
            {kamps.details.radio > 0 ? 'Radio' : null}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-hob`}></use>
            </SvgCard>
            {kamps.details.hob} hob
          </FeatureItem>
          {kamps.details.shower > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-shower`}></use>
              </SvgCard>
              {kamps.details.shower > 0 ? 'shower' : null}
            </FeatureItem>
          ) : null}
          {kamps.details.toilet > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-paper`}></use>
              </SvgCard>
              {kamps.details.toilet > 0 ? 'toilet' : null}
            </FeatureItem>
          ) : null}
          {kamps.details.freezer > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-freezer`}></use>
              </SvgCard>
              {kamps.details.freezer > 0 ? 'freezer' : null}
            </FeatureItem>
          ) : null}
          {kamps.details.hob > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-hob`}></use>
              </SvgCard>
              {kamps.details.hob} hob
            </FeatureItem>
          ) : null}
          {kamps.details.microwave > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-hob`}></use>
              </SvgCard>
              {kamps.details.microwave > 0 ? 'microwave' : null}
            </FeatureItem>
          ) : null}
          {kamps.details.gas > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-hob`}></use>
              </SvgCard>
              {kamps.details.gas}
            </FeatureItem>
          ) : null}
          {kamps.details.water > 0 ? (
            <FeatureItem>
              <SvgCard>
                <use href={`${svg}#icon-water`}></use>
              </SvgCard>
              {kamps.details.water}
            </FeatureItem>
          ) : null}
        </FeatureList>

        <div>
          <VehicleDetailsTittle>Vehicle details</VehicleDetailsTittle>

          <VehicleDetailsList>
            <VehicleDetailsItem>
              <p>Form</p>
              <p>{kamps.form}</p>
            </VehicleDetailsItem>

            <VehicleDetailsItem>
              <p>Length</p>
              <p>{kamps.length}</p>
            </VehicleDetailsItem>

            <VehicleDetailsItem>
              <p>Width</p>
              <p>{kamps.width}</p>
            </VehicleDetailsItem>

            <VehicleDetailsItem>
              <p>Height</p>
              <p>{kamps.height}</p>
            </VehicleDetailsItem>

            <VehicleDetailsItem>
              <p>Tank</p>
              <p>{kamps.tank}</p>
            </VehicleDetailsItem>

            <VehicleDetailsItem>
              <p>Consumption</p>
              <p>{kamps.consumption}</p>
            </VehicleDetailsItem>
          </VehicleDetailsList>
        </div>
      </FeatureLeftContainer>
      <BookingForm />
    </ContainerFeatures>
  );
}
