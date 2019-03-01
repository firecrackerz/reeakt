import * as React from 'react';
import { connect } from 'react-redux';
import { getDemo } from '@reducers/demo/actions';
import Hello from '@components/demos/hello-stateless';

interface HomeProps {
  getDemo: Function;
  demo: any;
}

class Home extends React.Component<HomeProps, {}> {
  componentWillMount() {
    this.props.getDemo();
  }

  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
        <p>{this.props.demo.lololo}</p>
        <img src={require('@assets/images/logo-reeakt.png')} />
        <img src={require('@assets/images/vectors/logo-reeakt.svg')} />
        <img src={require('@assets/images/logo-reeakt.jpg')} />
        <img src={require('@assets/images/test.gif')} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    demo: state.demo.data
  };
};

export default connect(
  mapStateToProps,
  { getDemo }
)(Home);
