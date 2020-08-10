import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import '../stylesheets/core/variables.scss';
import '../stylesheets/core/mixins.scss';
import'../stylesheets/layout/characterList.scss';

class CharacterList extends React.Component {
  render() {
    if (this.props.charactersToPaint.length === 0) {
      return (
        <p className="showResultsNone">{`No hay ningun personaje que coincida con la palabra ${this.props.inputSearch}`}</p>
      );
    } else {
      const contentResults = [];
      for (let i = 0; i < this.props.charactersToPaint.length; i++) {
        contentResults.push(
          <li  className="eachCard" id={this.props.charactersToPaint[i].id} key={this.props.charactersToPaint[i].id}>
            <CharacterCard character={this.props.charactersToPaint[i]} />
          </li>
        );
      }
      return (
        <section className="showResults">
          <ul className="resultList">{contentResults}</ul>
        </section>
      );
    }
  }
}
CharacterList.propTypes = { charactersToPaint: PropTypes.array.isRequired, inputSearch: PropTypes.string.isRequired };
export default CharacterList;
