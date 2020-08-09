import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <Link to={"/details/"+this.props.character.id}>
        <div className="picture">
          <img
            alt={this.props.character.name}
            src={this.props.character.image}
          />
        </div>
        <h3>{this.props.character.name}</h3>
        <p>{this.props.character.status}</p>
      </Link>
    );
  }
}
CharacterCard.propsType = { character: PropTypes.array.isRequired };
export default CharacterCard;
