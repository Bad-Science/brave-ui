/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Hero from '../hero'
import SettingsPage from '../settingsPage'
import Button from '../../../components/buttonsIndicators/button'
import InfoCard, { CardProps } from '../infoCard'
import { ArrowDownIcon, BatColorIcon, LoaderIcon } from '../../../components/icons'
import Alert from '../alert'

// Utils
import { getLocale } from '../../../helpers'

// Styles
import {
  StyledOptInSection,
  StyledOptInInnerSection,
  StyledCenterSection,
  StyledCenterContent,
  StyledSection,
  StyledCenterInner,
  StyledInfoContent,
  StyledTakeActionContent,
  StyledBackground,
  StyledBatLogo,
  StyledRewardsTitle,
  StyledActionTitle,
  StyledCenterTitle,
  StyledSubTitle,
  StyledTrademark,
  StyledRewardsParagraph,
  StyledTeaserParagraph,
  StyledCenterParagraph,
  StyledAnchor,
  StyledOptInSecond,
  StyledAlert
} from './style'

const turnOnRewardsImage = require('./assets/turnOnRewards')
const braveAdsImage = require('./assets/braveAds')
const braveContributeImage = require('./assets/braveContribute')

export interface Props {
  id?: string
  optInAction: () => void
}

interface State {
  creating: boolean
}

class WelcomePage extends React.PureComponent<Props, State> {
  private centerTextSection: HTMLDivElement | null

  constructor (props: Props) {
    super(props)
    this.centerTextSection = null
    this.state = {
      creating: false
    }
  }

  scrollToCenter = () => {
    if (!this.centerTextSection) {
      return
    }

    const centerTextSection = this.centerTextSection
    if (centerTextSection) {
      window.scrollTo({
        behavior: 'smooth',
        top: centerTextSection.offsetTop
      })
    }
  }

  refSet = (node: HTMLDivElement) => {
    this.centerTextSection = node
  }

  optInAction = () => {
    this.setState({
      creating: true
    })

    this.props.optInAction()
  }

  hero () {
    return (
      <Hero id={'rewards-hero'}>
        <StyledSection>
          <StyledBatLogo>
            <BatColorIcon />
          </StyledBatLogo>
          <StyledRewardsTitle level={2}>
            {getLocale('braveRewardsTitle')}
          </StyledRewardsTitle>
          <StyledTrademark>TM</StyledTrademark>
          <StyledSubTitle level={4}>
            {getLocale('braveRewardsSubTitle')}
          </StyledSubTitle>
          <StyledRewardsParagraph>
            {getLocale('braveRewardsDesc')}
          </StyledRewardsParagraph>
        </StyledSection>
        <StyledOptInSection>
          {
            this.state.creating
            ? <Button
              level='secondary'
              size='call-to-action'
              type='subtle'
              text={getLocale('braveRewardsCreatingText')}
              data-test-id='optInAction'
              icon={{
                image: <LoaderIcon />,
                position: 'after'
              }}
            />
            : <Button
              level='secondary'
              size='call-to-action'
              type='subtle'
              text={getLocale('braveRewardsOptInText')}
              onClick={this.optInAction}
              data-test-id='optInAction'
            />
          }
        </StyledOptInSection>
        <StyledSection>
          <StyledTeaserParagraph>
            {getLocale('braveRewardsTeaser')}
          </StyledTeaserParagraph>
          <StyledAnchor onClick={this.scrollToCenter}>
            <ArrowDownIcon />
          </StyledAnchor>
        </StyledSection>
      </Hero>
    )
  }

  get centerTextContent () {
    return (
      <StyledCenterContent>
        <StyledSection>
          <StyledCenterTitle level={3}>
            {getLocale('whyBraveRewards')}
          </StyledCenterTitle>
          <StyledCenterParagraph>
            {getLocale('whyBraveRewardsDesc')}
          </StyledCenterParagraph>
          <StyledCenterParagraph>
            {getLocale('whyBraveRewardsDesc1')}
          </StyledCenterParagraph>
          <StyledCenterParagraph>
            {getLocale('whyBraveRewardsDesc2')}
          </StyledCenterParagraph>
        </StyledSection>
      </StyledCenterContent>
    )
  }

  get optInContent () {
    return (
      <StyledOptInInnerSection>
        <StyledActionTitle level={4}>
          {getLocale('readyToTakePart')}
        </StyledActionTitle>
        <StyledOptInSecond>
          {
            this.state.creating
            ? <Button
              level={'primary'}
              size={'call-to-action'}
              type={'accent'}
              text={getLocale('braveRewardsCreatingText')}
              icon={{
                image: <LoaderIcon />,
                position: 'after'
              }}
            />
            : <Button
              level={'primary'}
              size={'call-to-action'}
              type={'accent'}
              text={getLocale('readyToTakePartOptInText')}
              onClick={this.optInAction}
            />
          }
        </StyledOptInSecond>
      </StyledOptInInnerSection>
    )
  }

  get infoCards (): CardProps[] {
    return [
      {
        title: getLocale('turnOnRewardsTitle'),
        description: getLocale('turnOnRewardsDesc'),
        icon: turnOnRewardsImage
      },
      {
        title: getLocale('braveAdsTitle'),
        description: getLocale('braveAdsDesc'),
        icon: braveAdsImage
      },
      {
        title: getLocale('braveContributeTitle'),
        description: getLocale('braveContributeDesc'),
        icon: braveContributeImage
      }
    ]
  }

  render () {
    const { id } = this.props

    return (
      <SettingsPage id={id}>
        <StyledAlert>
          {/* Don't translate this section, because it's just a temporary placeholder for dev build  */}
          <Alert type={'warning'}>
            <b>Developer preview</b> This is an experimental build meant for testing only. The wallet and
            created here is a test wallet, and will not be carried over to the release version of Brave.
          </Alert>
        </StyledAlert>
        <StyledBackground>
          <StyledSection>
            {this.hero()}
          </StyledSection>
          <StyledCenterSection>
            <StyledCenterInner innerRef={this.refSet}>
              {this.centerTextContent}
            </StyledCenterInner>
            <StyledInfoContent>
              <InfoCard
                id='rewards-info'
                cards={this.infoCards}
              />
            </StyledInfoContent>
            <StyledTakeActionContent>
              {this.optInContent}
            </StyledTakeActionContent>
          </StyledCenterSection>
        </StyledBackground>
      </SettingsPage>
    )
  }
}

export default WelcomePage
