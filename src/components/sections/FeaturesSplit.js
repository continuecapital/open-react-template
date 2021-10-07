import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  )

  const sectionHeader = {
    title: 'OUR STRENGTH',
    paragraph:
      'Continue Capital, with strong resource integration competitiveness in the space, is a strategic investor able to negotiate favorable deals for new projects.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs slug-text-color fw-600 tt-u mb-8">Our Strength</div>
                <h4 className="mt-0 mb-12">Strong Technical Background</h4>
                <p className="m-0 features-text">
                  Our team’s profound industry knowledge and strong technical background are recognized in Blockchain
                  industry. Those rich experience in blockchain and other high-tech development equip us with the
                  ability to identify promising projects and invest them strategically in early stage.
                </p>
              </div>
              <div
                className={classNames('split-item-image center-content-mobile reveal-from-bottom')}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/icon-networks.png')}
                  alt="icon-networks"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs slug-text-color fw-600 tt-u mb-8">Our Strength</div>
                <h4 className="mt-0 mb-12">Rich Experience</h4>
                <p className="m-0 features-text">
                  We have witnessed the rapid development of the whole blockchain industry, had a deep insight into the
                  development of blockchain technology.Our team has researched thousands of blockchain projects till
                  now, which makes us prominent in the whole industry.
                </p>
              </div>
              <div
                className={classNames('split-item-image center-content-mobile reveal-from-bottom')}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/icon-investors.png')}
                  alt="icon-investors"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs slug-text-color fw-600 tt-u mb-8">Our Strength</div>
                <h4 className="mt-0 mb-12">Global Community</h4>
                <p className="m-0 features-text">
                  Team members are located in US, China and Japan, excel in searching new projects globally, perform
                  extensive due diligence and research on each new project early on to identify the most profitable
                  digital assets to invest in.
                </p>
              </div>
              <div
                className={classNames('split-item-image center-content-mobile reveal-from-bottom')}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/icon-payments.png')}
                  alt="icon-payments"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs slug-text-color fw-600 tt-u mb-8">Our Strength</div>
                <h4 className="mt-0 mb-12">Strong Resource</h4>
                <p className="m-0 features-text">
                  We provide high-quality value-added services to our portfolio projects, with multi-dimension ecosystem
                  including Wallets, Exchanges, Mining pools, Incubator, Medias and other vertical industry.
                </p>
              </div>
              <div
                className={classNames('split-item-image center-content-mobile reveal-from-bottom')}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/icon-developers.png')}
                  alt="icon-developers"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit.propTypes = propTypes
FeaturesSplit.defaultProps = defaultProps

export default FeaturesSplit
