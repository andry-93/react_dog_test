const initialState = {
  breedActive: 'uncnown',
  breedList: [],
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
    default:
      return state;
  }
}
