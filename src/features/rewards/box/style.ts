/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Type } from './index'
import Card, { CardProps } from '../../../components/layout/card'
import { ComponentType } from 'react'

interface StyleProps {
  open?: boolean
  float?: string
  checked?: boolean
  type?: Type
}

const colors: Record<Type, string> = {
  ads: '#C12D7C',
  contribute: '#9F22A1',
  donation: '#696FDC'
}

export const StyledCard = styled(Card as ComponentType<CardProps>)`
  margin-bottom: 28px;
  font-family: Poppins, sans-serif;
`

export const StyledFlip = styled<StyleProps, 'div'>('div')`
  display: block;
`

export const StyledContentWrapper = styled<StyleProps, 'div'>('div')`
  flex-wrap: wrap;
  display: ${p => p.open ? 'flex' : 'none'};
`

export const StyledLeft = styled<{}, 'div'>('div')`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`

export const StyledRight = styled<StyleProps, 'div'>('div')`
  flex-basis: 40px;
  justify-content: flex-end;
  display: flex;
  max-height: 30px;
`

export const StyledTitle = styled<StyleProps, 'div'>('div')`
  height: 36px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  color: ${p => {
    if (p.checked === false) return '#838391'
    return p.type && colors[p.type] || '#4b4c5c'
  }};
`

export const StyledBreak = styled<{}, 'div'>('div')`
  width: 100%;
  display: block;
`

export const StyledDescription = styled<{}, 'div'>('div')`
  width: 100%;
  padding-right: 20px;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: normal;
  color: #a4aeb8;
`

export const StyledSettingsIcon = styled<StyleProps, 'button'>('button')`
  width: 27px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
`

export const StyledContent = styled<{}, 'div'>('div')`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: 25px;
`

export const StyledSettingsWrapper = styled<StyleProps, 'div'>('div')`
  background: #fff;
  overflow: hidden;
  display: ${p => p.open ? 'block' : 'none'};
`

export const StyledSettingsClose = styled<StyleProps, 'button'>('button')`
  display: ${p => p.open ? 'block' : 'none'};
  position: absolute;
  right: 29px;
  top: 29px;
  width: 21px;
  height: 21px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
`

export const StyledSettingsTitle = styled<{}, 'div'>('div')`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSettingsText = styled<{}, 'div'>('div')`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #4b4c5c;
  margin-left: 20px;
`
