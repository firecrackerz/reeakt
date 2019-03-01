import * as React from 'react';
import { Title } from './ui';

class HelloStateful extends React.Component<DemosHelloStatefulProps, {}> {
  render() {
    return (
      <Title>
        Stateful Hello from {this.props.compiler} and {this.props.framework}!
      </Title>
    );
  }
}

export default HelloStateful;
