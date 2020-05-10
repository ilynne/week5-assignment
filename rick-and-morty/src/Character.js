import React from 'react'
import { Link } from 'react-router-dom';
import CharacterPolaroid from './CharacterPolaroid';

export default class Character extends React.Component {

  render() {
    const { id, name, image, created } = this.props.character
    return (
      <Link to={`/character/${id}`}>
        <CharacterPolaroid
          name={name}
          image={image}
          created={created}
        >
        </CharacterPolaroid>
      </Link>
    )
  }
}
