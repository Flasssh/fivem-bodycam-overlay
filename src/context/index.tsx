import faker from 'faker';
import React from 'react';

export type BodyCamContextType = {
  state: boolean;
  isPulse: boolean;
  hoursSystem: boolean;
  isCaps: boolean;
  cameraBrand: string;
  policierName: string;
  policierBadgeNumber: number;
  policeDepartement: string;
  size: number;
  style: number;
};

const generatedPolicierName = faker.name.findName();
const generatedPolicierBageNuber = faker.datatype.number({
  min: 1,
  max: 999,
});

export const BodyCamContext = React.createContext<BodyCamContextType>({
  state: true,
  isPulse: true,
  hoursSystem: true,
  isCaps: true,
  cameraBrand: 'XION DASCHCAM',
  policierName: generatedPolicierName,
  policierBadgeNumber: generatedPolicierBageNuber,
  policeDepartement: 'LOS SANTOS POLICE DEPARTEMENT',
  size: 13,
  style: 2,
});
