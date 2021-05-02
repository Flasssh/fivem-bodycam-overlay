import React from 'react';

import { Configuration } from './Configuration';
import { Preview } from './Preview';

export function BodyCam() {
  return (
    <div>
      <Preview />
      <Configuration />
    </div>
  );
}
