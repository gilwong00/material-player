import React from 'react';
import { Header } from '../Header';
import { Player } from '../Player';
import withRoot from '../withRoot';

function App() {
  return (
    <>
      <Header />
      <Player />
    </>
  );
}

export default withRoot(App);
