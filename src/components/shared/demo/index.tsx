import * as React from 'react';
import { Container, Content, Label } from './ui';

export const Demo = (props: DemoProps) => (
  <Container>
    <Label>{props.label}</Label>
    <Content>{props.children}</Content>
  </Container>
);
