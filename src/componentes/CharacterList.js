import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.charactersToPaint.length === 0) {
      return (
        <p className="showResultsNone">No hay ningun personaje con este nombre</p>
      );
    } else {
      const contentResults = [];
      for (let i = 0; i < this.props.charactersToPaint.length; i++) {
        contentResults.push(
          <li  id={this.props.charactersToPaint[i].id} key={this.props.charactersToPaint[i].id}>
            <CharacterCard character={this.props.charactersToPaint[i]} />
          </li>
        );
      }
      return (
        <div className="showResults">
          <ul className="resultList">{contentResults}</ul>
        </div>
      );
    }
  }
}
CharacterList.propsTypes = { charactersArr: PropTypes.array.isRequired };
export default CharacterList;
