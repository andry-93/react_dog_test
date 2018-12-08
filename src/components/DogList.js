import React, { Component } from 'react';
import fetch from 'node-fetch';
import Dog from './Dog';

export default class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    const { props } = this;
    this.setState({ isLoading: true });
    fetch(`https://dog.ceo/api/breed/${props.match.params.breedActive}/images`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then(data => this.setState({ dogs: data.message, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { dogs, isLoading, error } = this.state;
    const dogElements = dogs.slice(0, 24).map(dog => (
      <div key={dog} className="col-md-4 col-lg-3">
        <Dog dog={dog} />
      </div>
    ));
    if (error) {
      return <p className="bg-warning .text-danger">{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const { props } = this;
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row gallery">
              <div className="col-md-12">
                <h1>
                  {props.match.params.breedActive[0].toUpperCase()
                  + props.match.params.breedActive.substring(1)}
                </h1>
              </div>
              {dogElements}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
