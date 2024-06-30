import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  body {
    background-color: white;
    background-size: auto 100%;
    background-position: center center;
    background-repeat: no-repeat;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${theme.colors.textColor};
    width: 100%;
    height: 100vh;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
  }
  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Inter-SemiBold';
    src: url('assets/fonts/Inter-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter-Regular';
    src: url('assets/fonts/Inter-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Inter-Medium';
    src: url('assets/fonts/Inter-Medium.ttf') format('truetype');
  }
`;
