/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles';
import copy from './copyToClipboad';
import { hexToRgb, rgbToHsl } from '../../colors';

export default function Palette({ name, colors = [] }) {
  const copyToClipboard = color => {
    // 1. convert hex to rgb to hsl
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb);
    const hslString = `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${hsl[3]})`;

    // 2. copy to clipboard
    if (copy(hslString)) {
      alert(`Copied ${hslString} to clipboard`);
    }
  };

  return (
    <div css={styles.container}>
      <h3 className="text-subtitle-2" css={styles.h3}>
        {name}
      </h3>
      {colors.map(c => {
        return (
          <div
            key={c.name}
            css={styles.kachel}
            onClick={() => copyToClipboard(c.color)}
          >
            <div css={[styles.inner, { backgroundColor: c.color }]}>
              <span className="text-caption">{c.name}</span>
            </div>
            <p
              className="text-caption"
              css={{ margin: 0, textAlign: 'center' }}
            >
              {c.color}
            </p>
          </div>
        );
      })}
    </div>
  );
}
