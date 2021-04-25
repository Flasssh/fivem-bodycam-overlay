import React, { useState } from 'react';

import { BodyCam } from '../BodyCam';

interface Props {
  name: string;
  matricule: number;
  departement: string;
  cameraBrand: string;
  isActivated: boolean;
  fullCaps: boolean;
  twelveHoursSys: boolean;
  styleNumber: number;
  parentCallBackConfigurator: any;
}

export function BodyCamEmplacement({
  name,
  matricule,
  departement,
  cameraBrand,
  isActivated,
  fullCaps,
  twelveHoursSys,
  styleNumber,
  parentCallBackConfigurator,
}: Props) {
  const bodyCamCallBack = (data: string) => {
    parentCallBackConfigurator(data);

    switch (data) {
      case 'top-left':
        setBodyCamVisibility1(true);
        setBodyCamVisibility2(false);
        setBodyCamVisibility3(false);
        setBodyCamVisibility4(false);
        break;
      case 'top-right':
        setBodyCamVisibility1(false);
        setBodyCamVisibility2(true);
        setBodyCamVisibility3(false);
        setBodyCamVisibility4(false);
        break;
      case 'bottom-left':
        setBodyCamVisibility1(false);
        setBodyCamVisibility2(false);
        setBodyCamVisibility3(true);
        setBodyCamVisibility4(false);
        break;
      case 'bottom-right':
        setBodyCamVisibility1(false);
        setBodyCamVisibility2(false);
        setBodyCamVisibility3(false);
        setBodyCamVisibility4(true);
        break;

      default:
        setBodyCamVisibility1(true);
        setBodyCamVisibility2(false);
        setBodyCamVisibility3(false);
        setBodyCamVisibility4(false);
        break;
    }
  };

  const [bodyCamVisibility1, setBodyCamVisibility1] = useState(true);
  const [bodyCamVisibility2, setBodyCamVisibility2] = useState(false);
  const [bodyCamVisibility3, setBodyCamVisibility3] = useState(false);
  const [bodyCamVisibility4, setBodyCamVisibility4] = useState(false);

  return (
    <div>
      <BodyCam
        name={name}
        matricule={matricule}
        departement={departement}
        cameraBrand={cameraBrand}
        isActivated={isActivated}
        fullCaps={fullCaps}
        twelveHoursSys={twelveHoursSys}
        styleNumber={styleNumber}
        emplacement={'top-left'}
        parentCallback={bodyCamCallBack}
        isSelected={bodyCamVisibility1}
      />
      <BodyCam
        name={name}
        matricule={matricule}
        departement={departement}
        cameraBrand={cameraBrand}
        isActivated={isActivated}
        fullCaps={fullCaps}
        twelveHoursSys={twelveHoursSys}
        styleNumber={styleNumber}
        emplacement={'top-right'}
        parentCallback={bodyCamCallBack}
        isSelected={bodyCamVisibility2}
      />
      <BodyCam
        name={name}
        matricule={matricule}
        departement={departement}
        cameraBrand={cameraBrand}
        isActivated={isActivated}
        fullCaps={fullCaps}
        twelveHoursSys={twelveHoursSys}
        styleNumber={styleNumber}
        emplacement={'bottom-left'}
        parentCallback={bodyCamCallBack}
        isSelected={bodyCamVisibility3}
      />
      <BodyCam
        name={name}
        matricule={matricule}
        departement={departement}
        cameraBrand={cameraBrand}
        isActivated={isActivated}
        fullCaps={fullCaps}
        twelveHoursSys={twelveHoursSys}
        styleNumber={styleNumber}
        emplacement={'bottom-right'}
        parentCallback={bodyCamCallBack}
        isSelected={bodyCamVisibility4}
      />
    </div>
  );
}
