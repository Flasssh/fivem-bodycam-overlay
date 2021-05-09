import React from 'react';

import { GlobalProvider } from '../../context';
import { Footer } from '../Footer';
import { Configuration } from './Configuration';
import { Preview } from './Preview';

export function BodyCam() {
  return (
    <div>
      <GlobalProvider>
        <div>
          <Preview />
          <Configuration />
          <Footer />
        </div>
      </GlobalProvider>
    </div>
  );
}
