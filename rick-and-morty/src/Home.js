import React from 'react';
import CharacterList from './CharacterList';

export default class Home extends React.Component {
  state = {
    isLoading: false,
    response: {
      info: {},
      results: []
    },
    characterListUrl: 'https://rickandmortyapi.com/api/character/'
  }

  getCharacters = () => {
    this.setState({ isLoading: true }, () => {
      fetch(this.state.characterListUrl)
        .then(result => result.json())
        .then(data => this.setState({ response: data, isLoading: false }))
    });
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  setCharacterListUrl = (characterListUrl) => {
    console.log(characterListUrl)
    this.setState({
      characterListUrl: characterListUrl
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
          setCharacterListUrl={this.setCharacterListUrl}
        >
        </CharacterList>}
      </div>
    );
  }
}
