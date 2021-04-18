import './style/tailwind/tailwind.output.css';

import React from 'react';

import { BodyCam } from './components/BodyCam';

// https://github.com/zhivotnoya/XION-ChaseCam

function App() {
  return (
    <div>
      <BodyCam
        name={'Mickael Smith'}
        matricule={100}
        departement={'los santos police departement'}
        cameraBrand={'COIL BODY CAM'}
      />
    </div>
  );
}

export default App;
