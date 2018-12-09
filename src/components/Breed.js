import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'node-fetch';

export default class Breed extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.state = {
      img: [],
      isLoading: false,
      error: null,
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => {
      const { state } = this;
      if (state.isMounted) {
        this.setState({ isMounted: false, isLoading: true });
        const { props } = this;
        fetch(`https://dog.ceo/api/breed/${props.breed}/images/random`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong ...');
          })
          .then(data => this.setState({ img: data.message, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      }
    });
  }

  onBtnClick(event) {
    const { props } = this;
    return props.setBreed(event.target.name);
  }

  render() {
    const { img, isLoading, error } = this.state;
    const imgElements = <div className="breed-img" style={{ backgroundImage: `url(${img})` }} />;
    const { props } = this;
    if (error) {
      return <p className="bg-warning text-danger">{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading image...</p>;
    }
    return (
      <div className="card mb-4 shadow-sm">
        {imgElements}
        <div className="card-body">
          <p className="card-text">{props.breed[0].toUpperCase() + props.breed.substring(1)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/${props.breed}`} className="btn btn-sm btn-outline-secondary" name={props.breed} onClick={this.onBtnClick}>View Album</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
