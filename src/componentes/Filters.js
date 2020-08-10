import React from "react";
import PropTypes from "prop-types";
import '../stylesheets/core/variables.scss';
import '../stylesheets/core/mixins.scss';
import '../stylesheets/layout/filters.scss';
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
  handleClick(){
   this.props.resetSearch()
  }
  render() {
    return (
      <form className="search">
        <input
          className="input"
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKey}
          placeholder="Buscar"
        ></input>
      </form>
    );
  }
}
Filters.propTypes ={resetSearch: PropTypes.func.isRequired }
Filters.propTypes ={searchInput: PropTypes.func.isRequired }
export default Filters;
