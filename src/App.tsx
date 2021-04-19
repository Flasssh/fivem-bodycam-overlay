import './style/tailwind/tailwind.output.css';
import './style/main.scss';

import React from 'react';

import { BodyCam } from './components/BodyCam';

function App() {
  return (
    <div>
      <div className="container">
        <div className="bodyCamPreviewer">
          <BodyCam
            name={'Mickael Smith'}
            matricule={100}
            departement={'los santos police departement'}
            cameraBrand={'COIL BODY CAM'}
            lightMode={false}
          />
        </div>
        <div className="bodyCamConfigurator"></div>
      </div>
    </div>
  );
}

export default App;
