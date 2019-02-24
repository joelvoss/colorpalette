import { css } from '@emotion/core';

export default {
  container: css`
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    margin: 0 0 0.5rem 0;
  `,
  h3: css`
    display: block;
    flex: 1 0 100%;
    width: 100%;
    margin: 0 0 0.25em;
  `,
  kachel: css`
    position: relative;
  `,
  inner: css`
    position: relative;
    width: 65px;
    height: 0;
    padding-top: 100%;
    cursor: pointer;

    &:hover span {
      opacity: 1;
    }

    span {
      position: absolute;
      bottom: calc(100% + 0.25em);
      left: 0;
      width: 100%;
      background-color: #333;
      color: #fff;
      padding: 0.25em;
      text-align: center;
      border-radius: 3px;
      opacity: 0;
      transition: opacity 75ms ease-out;
    }
  `,
};
