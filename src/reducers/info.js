const initialState = {
  breedActive: 'uncnown',
};

export default function breedInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_BREED':
      return { ...state, breedActive: action.payload };
    default:
      return state;
  }
}
