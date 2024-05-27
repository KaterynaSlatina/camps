import {
  BtnCatalog,
  HeroImgContainer,
  HeroText,
  HeroTextContainer,
  HeroTitle,
  HomeContainer,
  LinkToCatalog,
  PopularQuestionsContainer,
  PopularQuestionsTitle,
  QuestionAndSvg,
  QuestionItem,
  Questions,
  SvgHome,
} from './Home.styled.jsx';
import svg from '../../assets/icons/home-icons.svg';

export default function Home() {
  return (
    <HomeContainer>
      <HeroImgContainer>
        <HeroTextContainer>
          <HeroTitle>Rent the campervan of your dreams</HeroTitle>
          <HeroText>Go on exciting journeys with us!</HeroText>
        </HeroTextContainer>
        <BtnCatalog to="/catalog">Catalog</BtnCatalog>
      </HeroImgContainer>

      <PopularQuestionsContainer>
        <PopularQuestionsTitle>Popular questions</PopularQuestionsTitle>

        <Questions>
          <QuestionItem>
            <QuestionAndSvg>
              <SvgHome>
                <use href={`${svg}#icon-question`}></use>
              </SvgHome>
              <h3>How to rent a camp?</h3>
            </QuestionAndSvg>
            <p>
              Follow the link to the{' '}
              <LinkToCatalog to="/catalog">Catalog</LinkToCatalog> and select
              the appropriate camp. Fill out the form and we will contact you.
              We will sign the contract and ask for an advance payment. Next,
              you get the camp from the rental company, where they will show you
              how to use it and explain everything in detail. We are always in
              touch, so we will definitely help if something happens along the
              way.
            </p>
          </QuestionItem>

          <QuestionItem>
            <QuestionAndSvg>
              <SvgHome>
                <use href={`${svg}#icon-calendar`}></use>
              </SvgHome>
              <h3>How far in advance is it better to book a camp?</h3>
            </QuestionAndSvg>
            <p>
              It is better to book 2 weeks in advance. However, is camp is
              available, you can make a reservation through us 24 hours before
              the planned start.
            </p>
          </QuestionItem>

          <QuestionItem>
            <QuestionAndSvg>
              <SvgHome>
                <use href={`${svg}#icon-document`}></use>
              </SvgHome>
              <h3>What category of driver`s license is required?</h3>
            </QuestionAndSvg>
            <p>
              For most camps, the usual category “B” is suitable. There are
              large models of camps that require category “C” to drive, we will
              definitely draw your attention to this when choosing a camp.
            </p>
          </QuestionItem>

          <QuestionItem>
            <QuestionAndSvg>
              <SvgHome>
                <use href={`${svg}#icon-fuel`}></use>
              </SvgHome>
              <h3>What is the fuel consumption?</h3>
            </QuestionAndSvg>
            <p>
              Small models average 12 liters per 100 km. Camps with larger
              engines are more thirsty - 25 liters per 100 km.
            </p>
          </QuestionItem>

          <QuestionItem>
            <QuestionAndSvg>
              <SvgHome>
                <use href={`${svg}#icon-water`}></use>
              </SvgHome>
              <h3>Where to flush the toilet/dirty water/fill the water?</h3>
            </QuestionAndSvg>
            <p>
              The composting toilet cassette can be flushed into a public
              toilet. And also into the sewer at the campsite. You can refill
              clean water at a gas station or at a campsite.
            </p>
          </QuestionItem>
        </Questions>
      </PopularQuestionsContainer>
    </HomeContainer>
  );
}
