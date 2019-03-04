import * as React from 'react';
import Hello from '@components/demos/hello-stateless';
import DataFetch from '@containers/demos/data-fetch';
import { Header, Content, Footer } from '@components/shared';

const Home = () => (
  <React.Fragment>
    <Header title="reeakt" subtitle="A React.js boilerplate to awesome web applications" />

    <Content>
      <Hello compiler="TypeScript" framework="React" />
      <DataFetch />
      <img src={require('@assets/images/logo-reeakt.png')} />
      <img src={require('@assets/images/vectors/logo-reeakt.svg')} />
      <img src={require('@assets/images/logo-reeakt.jpg')} />
      <img src={require('@assets/images/test.gif')} />
    </Content>

    <Footer />
  </React.Fragment>
);

export default Home;
