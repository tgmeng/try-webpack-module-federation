import * as React from 'react';

import Button from './components/Button';

const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => (
  <div>
    <h2>App 1</h2>
    <Button>Hello</Button>
    <React.Suspense fallback="Loading Button">
      <RemoteButton>World</RemoteButton>
    </React.Suspense>
  </div>
);

export default App;
