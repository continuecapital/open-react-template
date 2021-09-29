import React from 'react'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
import ButtonGroup from '../elements/ButtonGroup'
import Button from '../elements/Button'
import Image from '../elements/Image'

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <Image src={require('./../../assets/images/earth.png')} alt="earth" width={639} height={643} />
            <div className="hero-top-content">
              <div>
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Built to be the <span className="text-color-primary">Catalyst</span>
                </h1>
                <div className="container-xs">
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    We invest in crypto startups that will bring the next 1 billion users to the web 3.0 economy.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="/#contact">
                        CONTACT US
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
