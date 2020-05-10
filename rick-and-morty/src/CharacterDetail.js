import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterPolaroid from './CharacterPolaroid';

export default class CharacterDetail extends React.Component {
  state = {
    isLoading: false,
    response: {}
  }

  getCharacter = () => {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, () => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result => result.json())
        .then(data => this.setState({ response: data, isLoading: false }))
    });
  }

  componentDidMount = () => {
    this.getCharacter();
  }

  render() {
    const { name, image, created, species, gender, status, location, origin } = this.state.response;
    const locationName = location ? location.name : 'Unknown';
    const originName = origin ? origin.name : 'Unknown';

    return (
      <div className={'character-detail-container'}>
        <CharacterPolaroid
          name={name}
          image={image}
          created={created}
        >
        </CharacterPolaroid>
        <div className={'character-information-container'}>
          <table className={'character-information-form'}>
            <tbody>
              <tr>
                <td colSpan={'3'}>
                  <span className="form-label">name</span>
                  <span className="form-info">{name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="form-label">species</span>
                  <span className="form-info">{species}</span>
                </td>
                <td>
                  <span className="form-label">gender</span>
                  <span className="form-info">{gender}</span>
                </td>
                <td>
                  <span className="form-label">status</span>
                  <span className="form-info">{status}</span>
                </td>
              </tr>
              <tr>
                <td colSpan={'3'}>
                  <span className="form-label">location</span>
                  <span className="form-info">{locationName}</span>
                </td>
              </tr>
              <tr>
                <td colSpan={'3'}>
                  <span className="form-label">origin</span>
                  <span className="form-info">{originName}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
