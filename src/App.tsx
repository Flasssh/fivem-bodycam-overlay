import './style/tailwind/tailwind.output.css';
import './style/main.scss';

import React from 'react';
import ReactTooltip from 'react-tooltip';

import { BodyCam } from './components/BodyCam';
import { BodyCamConfigurator } from './components/BodyCamConfigurator';

function App() {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="bodyCamPreviewer" data-tip="Preview">
          <BodyCam
            name={'Mickael Smith'}
            matricule={100}
            departement={'los santos police departement'}
            cameraBrand={'COIL BODY CAM'}
            lightMode={false}
          />
        </div>
        <BodyCamConfigurator />
      </div>
      <ReactTooltip />
    </div>
  );
}

export default App;
