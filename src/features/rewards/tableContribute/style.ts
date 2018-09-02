/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledText = styled<{}, 'div'>('div')`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  text-align: right;
  color: #686978;
`

export const StyledRemove = styled<{}, 'button'>('button')`
  margin: 0 5px 0 0;
  background: none;
  border: none;
  cursor: pointer;
  width: 21px;
  height: 21px;
  color: #DFDFE8;
  padding: 0;
`

export const StyledTHOther = styled<{}, 'div'>('div')`
  text-align: right;
`

export const StyledTHLast = styled(StyledTHOther)`
  padding-right: 10px;
`

export const StyledToggleWrap = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: space-between;
`

export const StyledToggle = styled<{}, 'button'>('button')`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  text-transform: capitalize;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const StyledLink = styled<{}, 'a'>('a')`
  text-decoration: none;
`

export const StyledRestore = styled<{}, 'button'>('button')`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  text-transform: capitalize;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`
