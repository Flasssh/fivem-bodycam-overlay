import './style/tailwind/tailwind.output.css';
import './style/main.scss';

import React from 'react';
import ReactTooltip from 'react-tooltip';

import { BodyCamConfigurator } from './components/BodyCamConfigurator';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <BodyCamConfigurator />
      </div>
      <Footer />
      <ReactTooltip />
    </div>
  );
}

export default App;
