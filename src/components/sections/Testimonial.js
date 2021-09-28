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

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Our Team',
    paragraph: '',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="team-card">
                  <Image src={require('./../../assets/images/pima-c.png')} alt="pima-c" width={140} height={140} />
                  <div className="pb-4 mt-12 center-content text-color-high">Hongjiang Li (Pima)</div>
                  <div className="pb-4 center-content text-small">Co-founder</div>
                  <p className="description text-sm mb-0">
                    Hongjiang Li is a famous blockchain industry investor, used to work at world’s top 50 Real Estate
                    Enterprise. He is the Founder of Bi Hai Chao Technology Company and a man of great insight in
                    Blockchain and Cryptocurrency space. Mr Li started to invest cryptocurrency since 2013 and become a
                    Ethereum Enthusiast firmly after joining Ethereum community in 2015. He is the biggest investor of
                    OmiseGo, Zilliqa and Polkadot in China and has led more than 40 investments including Cosmos, Qtum,
                    Tezos, Polkadot, Zilliqa, etc.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
                  <a href="https://twitter.com/LeePima">
                    <svg fill="#1c9cef" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="team-card">
                  <Image src={require('./../../assets/images/xiahong-c.png')} alt="pima-c" width={140} height={140} />
                  <div className="pb-4 mt-12 center-content text-color-high">Xiahong Lin</div>
                  <div className="pb-4 center-content text-small">Co-founder</div>
                  <p className="description text-sm mb-0">
                    Xiahong Lin is the renowned Talent in Sillicon Vally, the Founder and CEO of Bodhi Prediction
                    Market. Mr Lin holds the dual Master Degree in Computer Science from Purdue University and
                    Cryptography from Shanghai Jiaotong University. He is an excellent professional Developer with more
                    than 7 years’ experience in blockchain development and early Ethereum technology Evangelist. Mr Lin
                    used to be the Tech Leader of Android team at Edmodo, Developer of Android in Twitter and Associate
                    Researcher in Tencent.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
                  <a href="https://twitter.com/xhlin">
                    <svg fill="#1c9cef" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
