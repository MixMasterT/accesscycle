import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.goToFirstPage = this.goToFirstPage.bind(this);
    this.plusPage = this.plusPage.bind(this);
    this.minusPage = this.minusPage.bind(this);
    this.goToLastPage = this.goToLastPage.bind(this);
  }

  goToFirstPage() {
    const props = this.props
    props.isCountries ? props.updateCountryPage(0) : props.updateCityPage(0);
  }

  plusPage() {
    const props = this.props
    let page = props.cityPage;
    let pageLimit = props.totalCityPages;
    if(props.isCountries) {
      page = props.countryPage;
      pageLimit = props.totalCountryPages;
    }
    if(page < pageLimit) {
      page++;
    }
    props.isCountries ?
      props.updateCountryPage(page) :
      props.updateCityPage(page)
  }

  minusPage() {
    const props = this.props
    let page = props.cityPage;
    if(props.isCountries) {
      page = props.countryPage;
    }
    if(page > 0) {
      page--;
    }
    props.isCountries ?
    props.updateCountryPage(page) :
      props.updateCityPage(page)
  }

  goToLastPage() {
    const props = this.props;
    props.isCountries ?
      props.updateCountryPage(props.totalCountryPages) :
      props.updateCityPage(props.totalCityPages)
  }

  render() {
    const props = this.props;
    let page = props.cityPage;
    let pageLimit = props.totalCityPages;
    if(props.isCountries) {
      page = props.countryPage;
      pageLimit = props.totalCountryPages;
    }
    console.log('page', page);
    return (
      <div className="pagination">
        <div className="buttons">
          <div onClick={this.goToFirstPage}>◀◀</div>
          <div onClick={this.minusPage}>◀</div>
          <div onClick={this.plusPage}>▶</div>
          <div onClick={this.goToLastPage}>▶▶</div>
        </div>
        <div className="indicator">
          p.{page} of {pageLimit}
        </div>
      </div>
    );
  }
}

export default Pagination;
