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
const Contact = ({
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
    'contact section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames('tiles-wrap center-content', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'Any question? Reach out to us and we’ll get back to you shortly.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <div className="features-tiles-item-image mb-16" style={{ padding: '6px' }}>
                    <svg
                      t="1632851231187"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6895"
                      width="30"
                      height="30"
                    >
                      <path
                        fill="#ffffff"
                        d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z"
                        p-id="6896"
                      ></path>
                    </svg>
                  </div>
                  <p className="m-0 text-sm">contact@continue.capital</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <div className="features-tiles-item-image mb-16" style={{ padding: '4px' }}>
                    <svg
                      t="1632851205309"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5365"
                      width="30"
                      height="30"
                    >
                      <path
                        fill="#ffffff"
                        d="M512 128c-131.8 0-238.6 107.4-238.6 240 0 229.2 238.6 528 238.6 528s238.6-298.8 238.6-528C750.6 235.4 643.8 128 512 128zM512 484.4c-62.4 0-112.8-50.8-112.8-113.4 0-62.6 50.6-113.6 112.8-113.6 62.4 0 112.8 50.8 112.8 113.6C624.8 433.6 574.4 484.4 512 484.4z"
                        p-id="5366"
                      ></path>
                    </svg>
                  </div>
                  <p className="m-0 text-sm">845 Market St San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <div className="features-tiles-item-image mb-16" style={{ padding: '6px' }}>
                    <svg
                      t="1632851387789"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="9071"
                      width="28"
                      height="28"
                    >
                      <path
                        d="M128 512h384v384h42.666667l341.333333-768-768 341.333333z"
                        p-id="9072"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                  <p className="m-0 text-sm">No. 31, LongCheng Road, Qingdao, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = propTypes
Contact.defaultProps = defaultProps

export default Contact
