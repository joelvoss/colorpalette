/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Palette from './components/Palette';
import styles from './styles';
import { colors } from './colors';

export default function App() {
  return (
    <div className="colorpalette">
      <Global styles={styles.global} />
      <h1 className="h3">Color palette</h1>
      <div className="flex-row">
        <div className="flex-col">
          <h2 className="h5">
            Primary <br />
            <span className="text-small">Pick your primary color</span>
          </h2>

          {colors.map(col => {
            return (
              <Palette key={col.base} name={col.base} colors={col.colors} />
            );
          })}
        </div>
        <div css={{ flex: '0 0 350px' }} className="flex-col">
          <h2 className="h5">Complementary</h2>
          <Palette />

          <h2 className="h5">Analogous</h2>
          <Palette />
          <Palette />

          <h2 className="h5">Triadic</h2>
          <Palette />
          <Palette />
        </div>
      </div>
    </div>
  );
}
