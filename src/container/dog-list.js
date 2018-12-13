import React, { Component } from 'react';
import fetch from 'node-fetch';
import Dog from '../components/Dog';

export default class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      isLoading: false,
      error: null,
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => {
      const { state } = this;
      if (state.isMounted) {
        const { props } = this;
        this.setState({ isMounted: false, isLoading: true });
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
    });
  }

  toUpperTitle() {
    const { props } = this;
    return (
      props.match.params.breedActive[0].toUpperCase()
      + props.match.params.breedActive.substring(1)
    );
  }

  showList() {
    const { state } = this;
    if (state.error) {
      return <p className="bg-warning text-danger">{state.error.message}</p>;
    } if (state.isLoading) {
      return <p>Loading...</p>;
    }
    if (!state.isMounted) {
      return state.dogs.slice(0, 24).map(dog => (
        <div key={dog} className="col-md-4 col-lg-3">
          <Dog dog={dog} />
        </div>
      ));
    } return <p>Loading...</p>;
  }

  render() {
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row gallery">
              <div className="col-md-12">
                <h1>{this.toUpperTitle()}</h1>
              </div>
              { this.showList() }
            </div>
          </div>
        </div>
      </main>
    );
  }
}
