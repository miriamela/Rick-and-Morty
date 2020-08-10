import React from "react";
import "../stylesheets/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, Link } from "react-router-dom";
import "../stylesheets/core/variables.scss";
import "../stylesheets/core/mixins.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      characters: [],
      characterFiltered: [],
    };
    this.searchInput = this.searchInput.bind(this);
    this.renderingDetail = this.renderingDetail.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ characters: data.results }, () =>
          this.filterCharacters()
        );
      });
  }
  searchInput(input) {
    // console.log('me has clicado')
    this.setState({ inputValue: input }, () => this.filterCharacters());
    console.log(this.state.inputValue);
  }
  filterCharacters() {
    const filtered = this.state.characters.filter((x) =>
      x.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ characterFiltered: filtered });
  }



  renderingDetail(id) {
    const character = this.state.characterFiltered.find(character => character.id === parseInt(id) );
    // debugger;
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          species={character.species}
          planet={character.origin.name}
          episode={character.episode.length + 1}
          status={character.status}
          imageURL={character.image}
        />
      );
    }
    else{
      return(
        <div className="container">
        <Link to={'/'}><button className="back2" type='button'>Volver</button></Link>
      <p class="message">Este personaje no existe</p>
      </div>)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rick and Morty</h1>         
        </header>
        <Switch>
          <Route exact path="/">
            <main className="main">
              <Filters inputSearch={this.searchInput} />
              <CharacterList charactersToPaint={this.state.characterFiltered} />
            </main>
          </Route>
          <Route path="/otraRaiz" render={() => (<CharacterList charactersToPaint={this.state.characterFiltered} />)}/>
          <Route path="/details/:id" render={(routerProps) => this.renderingDetail(routerProps.match.params.id)}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
