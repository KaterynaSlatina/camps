import {
  BtnCatalog,
  HeroImgContainer,
  HeroText,
  HeroTextContainer,
  HeroTitle,
  HomeContainer,
} from './Home.styled.jsx';

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
    </HomeContainer>
  );
}
