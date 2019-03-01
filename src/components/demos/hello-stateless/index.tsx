import * as React from 'react';
import { Title } from './ui';

export default (props: DemosHelloStatelessProps) => (
  <Title>
    Stateless Hello from {props.compiler} and {props.framework}!
  </Title>
);
