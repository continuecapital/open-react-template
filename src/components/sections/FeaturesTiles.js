import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-32',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames('tiles-wrap center-content', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'ABOUT US',
    paragraph:
      'Founded in 2016, Continue Capital focuses on investing in global blockchain technology, early-stage technology startup and providing Quant-Trading service. We are built to incubate and partner with those ambitious enterprises that promote technological innovation and advance business model revolution.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container pt-16">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content pt-32" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icon-decentralized.png')}
                      alt="icon-decentralized"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Our Mission</h4>
                  <p className="m-0 text-sm">
                    Our mission is to act as the pioneer to widespread blockchain adoption and innovation, reduce the
                    cost of mutual trust, improve the efficiency of large-scale collaborative operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icon-reward.png')}
                      alt="icon-reward"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Our Faith</h4>
                  <p className="m-0 text-sm">
                    We hold the view that flattening trend of thought will further deepen the hearts of people as the
                    blockchian technology changes the productive relationship.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/icon-crowd.png')}
                      alt="icon-crowd"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Our Team</h4>
                  <p className="m-0 text-sm">
                    Our core team members are early Bitcoin community members, including top Venture Capitalists,
                    professional Blockchain Developers and technical Talents from internet giants, located in China,
                    Japan, and USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesTiles.propTypes = propTypes
FeaturesTiles.defaultProps = defaultProps

export default FeaturesTiles
