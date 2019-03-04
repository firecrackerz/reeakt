import * as serialize from 'serialize-javascript';
import * as React from 'react';
import { connect } from 'react-redux';
import { getDemo } from '@reducers/demo/actions';
import { Title } from './ui';

class DataFetch extends React.Component<DemosDataFetchProps, {}> {
  componentWillMount() {
    this.props.getDemo();
  }

  render() {
    return <Title>{serialize(this.props.demo)}</Title>;
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
)(DataFetch);
