import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.setPageToZero = this.setPageToZero.bind(this);
    this.plusPage = this.plusPage.bind(this);
    this.minusPage = this.minusPage.bind(this);
    this.goToLastPage = this.goToLastPage.bind(this);
  }

  setPageToZero() {
    const props = this.props
    props.isCity ? props.updateCityPage(0) :  props.updateCountryPage(0);
  }

  plusPage() {
    const props = this.props
    let page = props.page;
    if(page < props.totalPages) {
      page++;
    }
    props.isCountries ?
    props.updateCountryPage(page) :
      props.updateCityPage(page)
  }

  minusPage() {
    const props = this.props
    let page = props.page;
    if(page > 0) {
      page--;
    }
    console.log('minusPage called');
    console.log('props.isCountries', props.isCountries);
    props.isCountries ?
    props.updateCountryPage(page) :
      props.updateCityPage(page)
  }

  goToLastPage() {
    const props = this.props;
    props.isCountries ?
    props.updateCountryPage(props.totalPages) :
      props.updateCityPage(props.totalPages)
  }

  render() {
    return (
      <div className="pagination">
        <div onClick={this.setPageToZero}>◀◀</div>
        <div onClick={this.minusPage}>◀</div>
        <div onClick={this.plusPage}>▶</div>
        <div onClick={this.goToLastPage}>▶▶</div>
      </div>
    );
  }
}

export default Pagination;
