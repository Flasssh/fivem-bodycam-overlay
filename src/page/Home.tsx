import React from 'react';
import ReactTooltip from 'react-tooltip';

import { BodyCamConfigurator } from '../components/BodyCamConfigurator';
import { Footer } from '../components/Footer/Footer';

let bodyStyle = {
  backgroundColor: 'rgba(17, 24, 39, 1)',
};

export function Home() {
  return (
    <div className="h-full w-full absolute" style={bodyStyle}>
      <div className="container mx-auto mt-10">
        <BodyCamConfigurator />
      </div>
      <Footer />
      <ReactTooltip />
    </div>
  );
}
