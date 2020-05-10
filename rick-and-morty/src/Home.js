import React from 'react';
import CharacterList from './CharacterList';

export default class Home extends React.Component {
  state = {
    isLoading: false,
    response: {
      info: {},
      results: []
    },
    characterListPageNumber: 1,
    pages: 1
  }

  getCharacters = () => {
    this.setState({ isLoading: true }, () => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.characterListPageNumber}`)
        .then(result => result.json())
        .then(data => this.setState({ response: data, isLoading: false }))
    });
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  setCharacterListPageNumber = (characterListPageNumber) => {
    this.setState({
      characterListPageNumber: Number(characterListPageNumber)
    }, this.getCharacters())
  }

  render() {
    const { results, info } = this.state.response;

    return (
      <div className={'main-content-container'}>
        {<CharacterList
          isLoading={this.state.isLoading}
          results={results}
          info={info}
          characterListPageNumber={this.state.characterListPageNumber}
          setCharacterListPageNumber={this.setCharacterListPageNumber}
        >
        </CharacterList>}
      </div>
    );
  }
}
