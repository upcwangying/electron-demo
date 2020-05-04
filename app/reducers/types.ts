import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';
import { Persistor } from 'redux-persist/es/types';

export type counterStateType = {
  counter: number;
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<counterStateType, Action<string>>;

export type StoreType = {
  store: Store;
  persistor: Persistor | undefined;
};
