import queryString from 'query-string';
import React from 'react';

import { BodyCam } from '../components/BodyCam';

interface Props {
  location: any;
}

export function Overlay({ location }: Props) {
  let parsed = queryString.parse(location.search);
  // TODO: FIX PROBLEME DE TYPE
  console.log(parsed);

  return (
    <div>
      <BodyCam
        name={parsed.policeName}
        matricule={parsed.policeNumber}
        departement={parsed.policeDepartement}
        cameraBrand={parsed.cameraBrand}
        isActivated={parsed.dashcamstatus}
        fullCaps={parsed.fullcaps}
        twelveHoursSys={parsed.twelvehours}
      />
    </div>
  );
}
