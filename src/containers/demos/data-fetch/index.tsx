import * as React from 'react';
import { connect } from 'react-redux';
import { getDemo } from '@reducers/demo/actions';
import { PlainJSON } from './ui';

class DataFetch extends React.Component<DemosDataFetchProps, {}> {
  componentWillMount() {
    this.props.getDemo();
  }

  render() {
    return <PlainJSON>{JSON.stringify(this.props.demo, null, 2)}</PlainJSON>;
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
