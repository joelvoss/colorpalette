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
`;

export default {
  global,
};
