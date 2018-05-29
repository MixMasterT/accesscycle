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
          <span
            className='close-dropdown-ex'
            onClick={() => this.setState({ isOpen: false })}>&times;
          </span>
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
          {this.props.title}
          <div className="hidden">
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}

export default FloatingDropdown;
