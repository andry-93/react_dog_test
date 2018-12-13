import loadable from 'loadable-components';

export const BreedList = loadable(() => import('../container/breed-list'));
export const DogList = loadable(() => import('../container/dog-list'));
