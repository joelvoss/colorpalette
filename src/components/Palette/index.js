/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import styles from './styles';
import copy from './copyToClipboad';
import {
  colors,
  colorBaseVariants,
  colorAlternativeVariants,
  hexToRgb,
  rgbToHsl,
} from '../../colors';

export default function Palette() {
  const [primaryColor, setPrimaryColor] = useState({ base: '', color: '' });

  /**
   * Copy a color to the clipboard.
   * @param {string} color RGB color
   */
  const copyToClipboard = color => {
    // 1. Convert hex -> rgb -> hsl
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb);
    const hslString = `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${hsl[3]})`;

    // 2. Copy hsl to clipboard and alert the user.
    if (copy(hslString)) {
      setTimeout(() => alert(`Copied ${hslString} to clipboard`), 200);
    }
  };

  /**
   * Handle the click event on a single color swatch.
   * Sets the selected color as primary color and copys its hsl value to the
   * clipboard.
   * @param {string} base Color base name, e.g. "Red"
   * @param {string} color RGB color
   */
  const selectColor = (base, color) => {
    setPrimaryColor({ base, color });
    copyToClipboard(color);
  };

  return (
    <div css={styles.container}>
      <table css={styles.table}>
        <thead>
          <tr>
            <th />
            {colorBaseVariants.map(variant => (
              <th css={styles.th}>{variant}</th>
            ))}
            {colorAlternativeVariants.map((variant, idx) => (
              <th css={[styles.th, idx === 0 ? styles.colSpacer : []]}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: variant.split('A').join('A<br/>'),
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colors.map(cRow => {
            return (
              <tr>
                <td css={styles.rowName}>{cRow.base}</td>
                {cRow.colors.map(c => {
                  return (
                    <td
                      css={styles.td}
                      onClick={() => selectColor(cRow.base, c.color)}
                    >
                      <span
                        css={c.color === primaryColor.color && styles.active}
                        style={{ backgroundColor: c.color }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr />
        </tbody>
      </table>
    </div>
  );
}
