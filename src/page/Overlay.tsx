import queryString from 'query-string';
import React from 'react';

import { BodyCam } from '../components/BodyCam';

interface Props {
  location: any;
}

export function Overlay({ location }: Props) {
  let parsed = queryString.parse(location.search, {
    parseBooleans: true,
    parseNumbers: true,
  });

  let { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }: any = parsed;

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
        sizeHud={p10}
      />
    </div>
  );
}
