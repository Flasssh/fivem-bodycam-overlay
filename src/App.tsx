import React from 'react';
import { BodyCam } from './components/BodyCam';
import { BodyCamCreator } from './components/BodyCamCreator';

function App() {
  return (
    <div>
      <BodyCamCreator>
        <BodyCam recStatus={true} width={180} opacity={0.8} hourTwelve={true} weeksDay={true} brandName={"COIL"} agentName={"Mickael Smith"} agentMatricule={100} agentGrade={"Rookie"} policeDepartement={"Los Sant5ons Police Departement"}/>
      </BodyCamCreator>
    </div>
  );
}

export default App;
