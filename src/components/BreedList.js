import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'node-fetch';
import Breed from './Breed';
import setBreedAction from '../actions/actionBreed';
import setBreedList from '../actions/actionBreedList';

class BreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        fetch('https://dog.ceo/api/breeds/list/all')
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong ...');
          })
          .then((data) => {
            const { props } = this;
            this.setState(
              () => {
                props.setBreedListFunction(Object.keys(data.message));
              },
            );
            this.setState({ isLoading: false });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    });
  }

  render() {
    const { isLoading, error } = this.state;
    if (error) {
      return <p className="bg-warning text-danger">{error.message}</p>;
    } if (isLoading) {
      return <p>Loading...</p>;
    }
    const { props, state } = this;
    if (!state.isMounted) {
      const breedElements = props.breedList.slice(0, 24).map(breed => (
        <div key={breed} className="col-md-4 col-lg-3">
          <Breed breed={breed} setBreed={props.setBreedFunction} />
        </div>
      ));
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
    } return <p>Loading...</p>;
  }
}

function mapStateToProps(state) {
  return {
    breedActive: state.breedInfo.breedActive,
    breedList: state.breedInfo.breedList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBreedFunction: (breedActive) => {
      dispatch(setBreedAction(breedActive));
    },
    setBreedListFunction: (breedList) => {
      dispatch(setBreedList(breedList));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);
