import React from "react";
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='details'>
        <Link to='/'><button type='button'>Volver</button></Link>
        <div className="picture">
          <img className="img" alt={this.props.name} src={this.props.imageURL} />
        </div>
        <p className="characterInfo">
          <span className="name">Name:{this.props.name}</span>
          <span className="species">Species:{this.props.species}</span>
          <span className="Planet">Planet:{this.props.planet}</span>
          <span className="episode">Episodes:{this.props.episodes}</span>
          <span className="status">Status:{this.props.status}</span>
        </p>
      </section>
    );
  }
}
export default CharacterDetail;
