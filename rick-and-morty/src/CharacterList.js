import React from 'react';
import Character from './Character';
import CharacterPageNavigator from './CharacterPageNavigator';

export default class CharacterList extends React.Component {

  render() {
    const { results, info } = this.props
    // const results = [this.props.results[0]]
    return (
      <div>
        <CharacterPageNavigator
          info={info}
          setCharacterListUrl={this.props.setCharacterListUrl}
        >
        </CharacterPageNavigator>
        <div className={'character-list-container'}>
          { this.props.isLoading
            ? <p>Loading characters...</p>
            : results.map(character => (
              <Character
                key={character.id}
                character={character}
              >
              </Character>
            ))
          }
        </div>
      </div>
    )
  }
}
