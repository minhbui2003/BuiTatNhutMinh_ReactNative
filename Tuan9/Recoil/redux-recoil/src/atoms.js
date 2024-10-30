import { atom } from 'recoil';

export const taskListState = atom({
  key: 'taskListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
