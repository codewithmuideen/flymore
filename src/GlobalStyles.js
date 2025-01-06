import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Set font family and font size for the entire website */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Tahoma', sans-serif; /* Set your unique font-family */
    font-size: 16px; /* Set your base font-size */
    line-height: 1.6; /* Adjust line height for better readability */
    color: #333; /* Default text color */
    background-color: #f9f9f9; /* Default background color */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600; /* Consistent weight for headings */
  }

  p, span, a, li {
    font-size: 1rem; /* Adjust for all text elements */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Tahoma', sans-serif; /* Button font family */
    font-size: 1rem;
  }
`;

export default GlobalStyles;
