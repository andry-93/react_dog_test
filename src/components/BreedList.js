import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'node-fetch';
import Breed from './Breed';
import setBreedAction from '../actions/actionBreed';

class BreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then(data => this.setState({ breeds: Object.keys(data.message), isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { breeds, isLoading, error } = this.state;
    const { props } = this;
    // const breedElements = breeds.slice(0, 12).map((breed)=>
    const breedElements = breeds.slice(0, 24).map(breed => (
      <div key={breed} className="col-md-4 col-lg-3">
        <Breed breed={breed} setBreed={props.setBreedFunction} />
      </div>
    ));
    if (error) {
      return <p className="bg-warning text-danger">{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              {breedElements}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    breedActive: state.breedInfo.breedActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBreedFunction: (breedActive) => {
      dispatch(setBreedAction(breedActive));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);
