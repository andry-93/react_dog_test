import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'node-fetch';
import { setBreedListAction } from '../actions/actionBreedList';
import setBreedAction from '../actions/actionBreed';
import Breed from '../components/Breed';

class BreedsList extends Component {
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

  showList() {
    const { props, state } = this;
    if (state.error) {
      return <p className="bg-warning text-danger">{state.error.message}</p>;
    } if (state.isLoading) {
      return <p>Loading...</p>;
    }
    if (!state.isMounted) {
      return props.breedList.slice(0, 24).map(breed => (
        <div key={breed} className="col-md-4 col-lg-3">
          <Breed breed={breed} setBreed={props.setBreedFunction} />
        </div>
      ));
    } return <p>Loading...</p>;
  }

  render() {
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              { this.showList() }
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    breedList: state.breedInfo.breedList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBreedFunction: (breedActive) => {
      dispatch(setBreedAction(breedActive));
    },
    setBreedListFunction: (breedList) => {
      dispatch(setBreedListAction(breedList));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedsList);
