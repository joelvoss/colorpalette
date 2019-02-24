import { css } from '@emotion/core';

// Global styles
const global = css`
  /* General */
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .colorpalette {
    margin: 1rem;
  }

  /* Flexbox helper */
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-col {
    flex: 1 0 auto;
  }

  /* Fonts */
  h1,
  .h1 {
    font-size: 6rem;
    font-weight: 200;
    text-transform: initial;
    letter-spacing: -1.5;
  }
  h2,
  .h2 {
    font-size: 3.75rem;
    font-weight: 200;
    text-transform: initial;
    letter-spacing: -0.5;
  }
  h3,
  .h3 {
    font-size: 3rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0;
  }
  h4,
  .h4 {
    font-size: 2.125rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.25;
  }
  h5,
  .h5 {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0;
  }
  h6,
  .h6 {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: initial;
    letter-spacing: 0.15;
  }
  .text-subtitle-1 {
    font-size: 1rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.15;
  }
  .text-subtitle-2 {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: initial;
    letter-spacing: 0.1;
  }
  .text-base {
    font-size: 1rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.5;
  }
  .text-small {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.25;
  }
  .text-button {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.25;
  }
  .text-caption {
    font-size: 0.75em;
    font-weight: 400;
    text-transform: initial;
    letter-spacing: 0.4;
  }
`;

export default {
  global,
};
