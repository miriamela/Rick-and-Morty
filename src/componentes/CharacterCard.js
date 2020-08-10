import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import '../stylesheets/core/variables.scss';
import '../stylesheets/core/mixins.scss';
import '../stylesheets/layout/characterCard.scss';

class CharacterCard extends React.Component {
  render() {
    return (
      <>
        <div className="picture">
          <img
            alt={this.props.character.name}
            src={this.props.character.image}
          />
        </div>
        <div className="info">
          <span className="name">{`+ ${this.props.character.name}`}</span>
          <span className="status">{`+ ${this.props.character.status}`}</span>
          <Link to={"/details/" + this.props.character.id}>
            <button className="moreInfo" type="button">info</button>
          </Link>
        </div>
      </>
    );
  }
}
CharacterCard.propTypes = { character: PropTypes.object.isRequired };
export default CharacterCard;
