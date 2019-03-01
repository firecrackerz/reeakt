import * as React from 'react';
import Hello from '@components/demos/hello-stateless';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />

        <img src={require('@assets/images/logo-reeakt.png')} />
        <img src={require('@assets/images/vectors/logo-reeakt.svg')} />
        <img src={require('@assets/images/logo-reeakt.jpg')} />
        <img src={require('@assets/images/test.gif')} />
      </div>
    );
  }
}

export default Home;
