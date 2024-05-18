import { HeroTextContainer, HomeContainer } from './Home.styled.jsx';

export default function Home() {
  return (
    <HomeContainer>
      <HeroTextContainer>
        <h1>Rent the campervan of your dreams</h1>
        <p>Go on exciting journeys with us!</p>
      </HeroTextContainer>
      {/* <div className={css.heroImg}>
          <img src={camper} alt="camper" />
        </div> */}
    </HomeContainer>
  );
}
