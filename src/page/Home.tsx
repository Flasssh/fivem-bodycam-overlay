import '../style/style.scss';

import React from 'react';
import styled from 'styled-components';

import { BodyCam } from '../components/BodyCam';

const HomeContent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #111827;
`;

const Container = styled.div`
  width: 800px;
  min-width: 800px;
  margin: 0 auto;
`;

export function Home() {
  return (
    <HomeContent>
      <Container>
        <BodyCam />
      </Container>
    </HomeContent>
  );
}
