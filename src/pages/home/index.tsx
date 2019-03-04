import * as React from 'react';
import DataFetch from '@containers/demos/data-fetch';
import { Header, Content, Footer, Demo } from '@components/shared';
import { Container, DemoList } from './ui';

const Home = () => (
  <Container>
    <Header title="reeakt" subtitle="A React.js boilerplate to awesome web applications" />

    <Content>
      <DemoList>
        <Demo label={'Data Fetch'}>
          <DataFetch />
        </Demo>
        <Demo label={'PNG'}>
          <img src={require('@assets/images/logo-reeakt.png')} />
        </Demo>
        <Demo label={'SVG'}>
          <img src={require('@assets/images/vectors/logo-reeakt.svg')} />
        </Demo>
        <Demo label={'JPG'}>
          <img src={require('@assets/images/logo-reeakt.jpg')} />
        </Demo>
        <Demo label={'GIF'}>
          <img src={require('@assets/images/test.gif')} />
        </Demo>
      </DemoList>
    </Content>

    <Footer />
  </Container>
);

export default Home;
