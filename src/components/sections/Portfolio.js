import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import PortfolioData from "../../utils/PortfolioData";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const Portfolio = ({
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
	const portfolioData = PortfolioData;

	const outerClasses = classNames(
		"portfolio section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"portfolio-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const portfolioClasses = classNames("portfolio-container center-content");

	const sectionHeader = {
		title: "All Our Portfolios",
		paragraph:
			"Our investment direction covers Public chain, General Protocol, Decentralized Applications, Industrial Service and so on, leading the blockchain into mainsrteam.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={portfolioClasses}>
						{portfolioData.map((item, index) => {
							return (
								<div
									className="mb-32 pb-8 reveal-from-right"
									key={index + item.url}
									data-reveal-delay={((index % 6) + 1) * 100}
								>
									<a href={item.url}>
										<Image
											src={item.logoUrl}
											alt={item.url}
											width={65}
											height={65}
										/>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
