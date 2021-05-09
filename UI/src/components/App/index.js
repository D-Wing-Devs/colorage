import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';

const App = () => (
  <React.Fragment>
    <main>
      <Filter />
      <Shelf />
    </main>
  </React.Fragment>
);

export default App;
