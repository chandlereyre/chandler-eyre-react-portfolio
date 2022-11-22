import React from "react";
import axios from "axios";

export default class PortfolioDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };
    this.getPortfolioDetails = this.getPortfolioDetails.bind(this);
  }
  getPortfolioDetails() {
    axios
      .get(
        `https://chandlereyre.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
      })
      .catch((error) => {
        console.log("error with getPortfolioDetails", error);
      });
  }

  componentDidMount() {
    this.getPortfolioDetails();
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    return (
      <div>
        <div className="portfolio-detail-container">
          <div
            className="banner"
            style={{ backgroundImage: "url(" + banner_image_url + ")" }}
          >
            <img src={logo_url} />
          </div>
          <div className="portfolio-detail-content">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url} target="_blank">
              Visit {name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
