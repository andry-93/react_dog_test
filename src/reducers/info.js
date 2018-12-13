const initialState = {
  breedActive: 'uncnown',
  breedList: [],
  loading: false,
  error: null,
};

export default function breedInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_BREED':
      return {
        ...state,
        breedActive: action.payload,
      };
    case 'SET_BREEDLIST':
      return {
        ...state,
        breedList: action.payload,
      };
    case 'FETCH_BREEDLIST_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_BREEDLIST_SUCCESS':
      return {
        ...state,
        loading: false,
        breedList: action.payload,
      };
    case 'FETCH_BREEDLIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        breedList: [],
      };
    default:
      return state;
  }
}
