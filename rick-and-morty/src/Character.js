import React from 'react'

export default class Character extends React.Component {

  render() {
    const { id, name, image, created } = this.props.character
    return (
      <div className={'character-container'}>
        <div className={'character-image-container'}>
          <img src={image} alt={`portrait of ${name}`}></img>
          <p className={'image-time-stamp'}>{created}</p>
        </div>
        <div className={'caption'}>{name}</div>
      </div>
    )
  }
}
