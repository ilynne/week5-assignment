import React from 'react'

export default class Character extends React.Component {

  render() {
    const { id, name, image } = this.props.character
    return (
      <div className={'character-container'}>
        <img src={image} alt={`portrait of ${name}`}></img>
        <p>{name}</p>
      </div>
    )
  }
}
