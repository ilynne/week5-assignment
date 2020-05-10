import React from 'react';
import CharacterList from './CharacterList';

export default class Home extends React.Component {
  state = {
    isLoading: false,
    response: {
      info: {},
      results: []
    }
  }

  getCharacters = () => {
    this.setState({ isLoading: true }, () => {
      fetch('https://rickandmortyapi.com/api/character/')
        .then(result => result.json())
        .then(data => this.setState({ response: data, isLoading: false }))
    });
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  render() {
    const { results } = this.state.response;

    return (
      <div className={'main-content-container'}>
        {<CharacterList
          isLoading={this.state.isLoading}
          results={results}
        >
        </CharacterList>}
      </div>
    );
  }
}
