import React from 'react';

import { Footer } from '../Footer';
import { Configuration } from './Configuration';
import { Preview } from './Preview';

export function BodyCam() {
  return (
    <div>
      <Preview />
      <Configuration />
      <Footer />
    </div>
  );
}
