/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import Palette from './components/Palette';
import styles from './styles';

export default function App() {
  return (
    <div className="colorpalette">
      <Global styles={styles.global} />
      <h1 className="h6">COLOR PALETTE</h1>
      <span
        className="text-small"
        css={css`
          display: inline-block;
          margin-bottom: 1rem;
        `}
      >
        Pick your <code>PRIMARY</code> color and get <code>COMPLEMENTARY</code>,{' '}
        <code>ANALOGOUS</code> and <code>TRIADIC</code> color suggestions.
      </span>
      <div className="flex-row">
        <div
          className="flex-col"
          css={css`
            flex: 1 0 50%;
            margin-right: 2rem;
          `}
        >
          <Palette />
        </div>
        <div
          className="flex-col"
          css={css`
            flex: 1 0 50%;
          `}
        >
          <h2 className="text-subtitle-1">COMPLEMENTARY</h2>
          <h2 className="text-subtitle-1">ANALOGOUS</h2>
          <h2 className="text-subtitle-1">TRIADIC</h2>
        </div>
      </div>
    </div>
  );
}
