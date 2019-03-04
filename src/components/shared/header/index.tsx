import * as React from 'react';
import { Container, Title, Subtitle } from './ui';

export const Header = (props: HeaderProps) => (
  <Container>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </Container>
);
