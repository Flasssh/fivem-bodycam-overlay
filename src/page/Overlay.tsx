import queryString from 'query-string';
import React from 'react';

import { BodyCam } from '../components/BodyCam';

interface Props {
  location: any;
}

interface parsedQuery {
  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  p6: any;
  p7: any;
  p8: any;
  p9: any;
}

export function Overlay({ location }: Props) {
  let parsed = queryString.parse(location.search, {
    parseBooleans: true,
    parseNumbers: true,
  });

  let { p1, p2, p3, p4, p5, p6, p7, p8, p9 }: parsedQuery = parsed;

  return (
    <div>
      <BodyCam
        name={p3}
        matricule={p5}
        departement={p4}
        cameraBrand={p2}
        isActivated={p7}
        fullCaps={p6}
        twelveHoursSys={p8}
        styleNumber={p9}
        emplacement={p1}
        isSelected={true}
      />
    </div>
  );
}
