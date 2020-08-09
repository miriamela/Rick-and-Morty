import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleChange(event) {
    const valueInput = event.target.value;
    this.props.inputSearch(valueInput);
  }
  handleKey(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }
  render() {
    return (
      <form className="search">
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKey}
        ></input>
      </form>
    );
  }
}
export default Filters;
