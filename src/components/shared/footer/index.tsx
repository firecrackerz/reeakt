import * as React from 'react';
import { Container, Title, Heart, Link } from './ui';

export const Footer = () => (
  <Container>
    <Title>
      Made with <Heart>♥</Heart> by <Link href="https://betomuniz.com">Beto Muniz</Link>.
    </Title>
  </Container>
);
