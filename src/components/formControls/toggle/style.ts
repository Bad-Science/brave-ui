/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props } from './index'

const getBulletStyle = (p: Props) => {
  // default is large with dark variation
  let size = 24
  let offX = 16
  let offY = 4
  let bgColor = '#6D73D2'

  if (p.size === 'small') {
    size = 16
    offX = 12
    offY = 3
  }

  if (p.type === 'light') {
    bgColor = '#fb542b'
  }

  if (!p.checked) {
    offX = -1
    bgColor = '#CDD1D5'
  }

  if (p.disabled) {
    bgColor = '#EBECF0'
  }

  return css`
    --toggle-bullet-size: ${size}px;
    --toggle-bullet-transform: translate(${offX}px, calc(-50% - ${offY}px));
    --toggle-bullet-background: ${bgColor};
  `
}

export const StyledWrapper = styled<Props, 'div'>('div')`
  display: flex;
`

export const StyleToggle = styled<Props, 'div'>('div')`
  position: relative;
  display: block;
  height: ${(p) => p.size === 'small' ? '16px' : '24px'};
  width: ${(p) => p.size === 'small' ? '28px' : '40px'};

  ${(p) => p.disabled
    ? css`
      pointer-events: none;
      animation: none;
    ` : ''
  };
`

export const StyledSlider = styled<Props, 'div'>('div')`
  background: ${(p) => p.disabled ? '#F6F6FA' : '#A7ACB2'};
  height: ${(p) => p.size === 'small' ? '6px' : '8px'};
  margin-top: ${(p) => p.size === 'small' ? '5px' : '8px'};
  width: 100%;
  border-radius: 3px;
`

export const StyledBullet = styled<Props, 'div'>('div')`
  position: relative;
  border-radius: 50%;
  transition: 200ms ease-out;
  ${getBulletStyle};
  width: var(--toggle-bullet-size);
  height: var(--toggle-bullet-size);
  transform: var(--toggle-bullet-transform);
  background-color: var(--toggle-bullet-background);
`

export const StyledText = styled<Props, 'div'>('div')`
  color: #838391;
  font-size: ${(p) => p.size === 'small' ? '12px' : '14px'};
  font-family: Poppins, sans-serif;
  text-align: right;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: ${(p) => p.size === 'small' ? '0px' : '4px'} 8px 0 0;
  opacity: ${(p) => !p.checked && !p.disabled ? 1 : 0 };
  transition: 100ms ease-out;
`
