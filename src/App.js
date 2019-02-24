/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Palette from './components/Palette';
import styles from './styles';
import { colors } from './colors';

export default function App() {
  return (
    <div className="colorpalette">
      <Global styles={styles.global} />
      <h1>Color palette</h1>
      <div className="flex-row">
        <div className="flex-col">
          <h2>Primary</h2>
          <Palette />

          <h2>Complementary</h2>
          <Palette />

          <h2>Analogous</h2>
          <Palette />
          <Palette />

          <h2>Triadic</h2>
          <Palette />
          <Palette />
        </div>
        <div css={{ flex: '0 0 350px' }} className="flex-col">
          {colors.map(col => {
            return (
              <div key={col.base} css={{ display: 'flex' }}>
                {col.colors.map(c => {
                  return (
                    <div
                      key={c.name}
                      css={{
                        width: 35,
                        height: 35,
                        backgroundColor: c.color,
                        border: '1px solid #efefef',
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
