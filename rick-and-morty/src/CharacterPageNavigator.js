import React from 'react';

export default class CharacterPageNavigator extends React.Component {

  handleNextPrevClick = (e) => {
    this.props.setCharacterListUrl(e.target.value)
  }

  render() {
    const { count, pages, next, prev } = this.props.info;

    return (
      <div>
        { prev
          ? <button value={prev} onClick={this.handleNextPrevClick}>Prev</button>
          : null
        }
        { next
          ? <button value={next} onClick={this.handleNextPrevClick}>Next</button>
          : null
        }
      </div>
    )
  }
}
