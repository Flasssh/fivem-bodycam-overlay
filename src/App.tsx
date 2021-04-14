import React from 'react';
import { BodyCam } from './components/BodyCam';

function App() {
  return (
    <div>
      <BodyCam recStatus={true} width={180} opacity={0.8} fullDaySys={false} weeksDay={true} brandName={"COIL"} agentName={"Mickael Smith"} agentMatricule={100} agentGrade={"Rookie"} policeDepartement={"Los Sant5ons Police Departement"}/>
    </div>
  );
}

export default App;
