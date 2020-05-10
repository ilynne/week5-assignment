import React from 'react';
import Character from './Character';

export default class CharacterList extends React.Component {

  render() {
    const { results } = this.props
    // const results = [this.props.results[0]]
    return (
      <div className={'character-list-container'}>
        { this.props.isLoading
          ? <p>Loading...</p>
          : results.map(character => (
            <Character
              key={character.id}
              character={character}
            >
            </Character>
          ))
        }
      </div>
    )
  }
}
