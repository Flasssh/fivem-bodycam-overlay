import queryString from 'query-string';
import React from 'react';

import { BodyCam } from '../components/BodyCam';

interface Props {
  location: any;
}

interface parsedQuery {
  cameraBrand: string;
  dashcamstatus: boolean;
  fullcaps: boolean;
  policeDepartement: string;
  policeName: string;
  policeNumber: number;
  twelvehours: boolean;
}

export function Overlay({ location }: Props) {
  let parsed = queryString.parse(location.search, {
    parseBooleans: true,
    parseNumbers: true,
  });

  let {
    cameraBrand,
    dashcamstatus,
    fullcaps,
    policeDepartement,
    policeName,
    policeNumber,
    twelvehours,
  }: parsedQuery = parsed;

  return (
    <div>
      <BodyCam
        name={policeName}
        matricule={policeNumber}
        departement={policeDepartement}
        cameraBrand={cameraBrand}
        isActivated={dashcamstatus}
        fullCaps={fullcaps}
        twelveHoursSys={twelvehours}
      />
    </div>
  );
}
