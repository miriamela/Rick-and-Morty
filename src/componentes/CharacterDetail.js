import React from "react";
import { Link } from 'react-router-dom';
import "../stylesheets/core/mixins.scss";
import "../stylesheets/core/variables.scss";
import "../stylesheets/layout/characterDetails.scss";

class CharacterDetail extends React.Component {
  render() {
    return (
      <section className="section">
        <article className="details">
        <div className="picture">
          <img className="img" alt={this.props.name} src={this.props.imageURL} />
        </div>
        <div className="characterInfo">
          <span className="name">+{this.props.name} </span>
          <span className="species">+{this.props.species}</span>
          <span className="Planet">+{this.props.planet}</span>
          <span className="episode">+Episodes: {this.props.episode}</span>
          <span className="status">+{this.props.status}</span>
          <Link to='/'><button className="back" type='button'>Volver</button></Link>
        </div>
      </article>
      </section>
    );
  }
}
export default CharacterDetail;
