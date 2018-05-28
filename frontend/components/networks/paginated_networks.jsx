import React from 'react';

class PaginatedNetworks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      recordsPerPage: 25,
    }
    this.goToFirstPage = this.goToFirstPage.bind(this);
    this.plusPage = this.plusPage.bind(this);
    this.minusPage = this.minusPage.bind(this);
    this.goToLastPage = this.goToLastPage.bind(this);
  }

  goToFirstPage() {
    this.setState({
      page: 0,
    });
  }

  plusPage(pageLimit) {
    return () => {
      let page = this.state.page;
      if(page < pageLimit) {
        page++;
      }
      this.setState({ page });
    }
  }

  minusPage() {
    let page = this.state.page;
    if(page > 0) {
      page--;
    }
    this.setState({ page });
  }

  goToLastPage(pageLimit) {
    return () => {
      this.setState({
        page: pageLimit,
      });
    }
  }

  render() {
    const props = this.props;
    const list = props.networks;
    const page = this.state.page;
    const recordsPerPage = this.state.recordsPerPage;
    console.log('recordsPerPage', recordsPerPage);
    const start = page * recordsPerPage;
    const end = start + recordsPerPage;
    const pageLimit = Math.floor(list.length / recordsPerPage);
    console.log('pageLimit', pageLimit);
    return (
      <div className="network-names-container">
        <ul>{list.slice(start, end)}</ul>
        <div className="pagination">
          <div className="buttons">
            <div onClick={this.goToFirstPage}>◀◀</div>
            <div onClick={this.minusPage}>◀</div>
            <div onClick={this.plusPage(pageLimit)}>
              ▶
            </div>
            <div onClick={this.goToLastPage(pageLimit)}>
              ▶▶
            </div>
          </div>
          <div className="indicator">
            p.{page + 1} of {pageLimit + 1}
          </div>
        </div>
      </div>
    )
  }
}

export default PaginatedNetworks;
