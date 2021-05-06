import '../style/style.scss';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

import { BodyCam } from '../components/BodyCam';

const HomeContent = styled.div`
  height: 100%;
  width: 100%;
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
      <Toaster position="top-right" reverseOrder={false} />
    </HomeContent>
  );
}
