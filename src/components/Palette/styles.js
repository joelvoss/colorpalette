import { css } from '@emotion/core';

export default {
  container: css`
    overflow: hidden;
  `,
  table: css`
    border-collapse: collapse;
  `,
  th: css`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1em;
    text-align: center;
    padding: 0.25rem;
  `,
  colSpacer: css`
    border-left: 1px solid #dedede;
  `,
  rowName: css`
    width: auto;
    font-size: 0.75rem;
    padding: 0 0.5rem 0 0;
    text-align: right;
    border-bottom: 1px solid #dedede;
  `,
  td: css`
    position: relative;
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;

    &:hover span {
      border-radius: 0.5rem;
    }

    & span {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0px;
      transition: border-radius 175ms;
    }
  `,
  active: css`
    border-radius: 100% !important;
  `,
};
