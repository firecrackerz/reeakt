import * as React from 'react';
import Hello from '@components/demos/hello-stateless';
import DataFetch from '@containers/demos/data-fetch';

interface HomeProps {
  getDemo: Function;
  demo: any;
}

class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
        <DataFetch />
        <img src={require('@assets/images/logo-reeakt.png')} />
        <img src={require('@assets/images/vectors/logo-reeakt.svg')} />
        <img src={require('@assets/images/logo-reeakt.jpg')} />
        <img src={require('@assets/images/test.gif')} />
      </div>
    );
  }
}

export default Home;
