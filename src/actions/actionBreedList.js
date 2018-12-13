export function setBreedListAction(breedList) {
  return {
    type: 'SET_BREEDLIST',
    payload: breedList,
  };
}

export function fetchBreedListBegin() {
  return {
    type: 'FETCH_BREEDLIST_BEGIN',
  };
}

export function fetchBreedListSuccess(breedList) {
  return {
    type: 'FETCH_BREEDLIST_SUCCESS',
    payload: breedList,
  };
}

export function fetchBreedListFailure(error) {
  return {
    type: 'FETCH_BREEDLIST_FAILURE',
    payload: error,
  };
}
