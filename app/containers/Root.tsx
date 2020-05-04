import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Persistor } from 'redux-persist/es/types';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from '../reducers/types';
import Routes from '../Routes';

type Props = {
  store: Store;
  history: History;
  persistor: Persistor | undefined;
};

const Root = ({ store, history, persistor }: Props) => (
  <Provider store={store}>
    {!persistor ? (
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    ) : (
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </PersistGate>
    )}
  </Provider>
);

export default hot(Root);
