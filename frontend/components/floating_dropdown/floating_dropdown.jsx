import React from 'react';

class FloatingDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }
  render() {
    if (this.state.isOpen) {
      return (
        <div className={`floating-dropdown ${this.props.title}`}>
          <div
            className="dropdown-title"
            onClick={() => this.setState({ isOpen: false })}
          >
            <h3>{this.props.title}&nbsp;&nbsp;&times;</h3>
          </div>
          <div className="floating-content">
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div
          className={`floating-dropdown ${this.props.title} closed`}
          onClick={() => this.setState({ isOpen: true} )}
        >
          <div className="dropdown-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="hidden">
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}

export default FloatingDropdown;
