import React from 'react';

export type BodyCamContextType = {
  state: boolean;
  hoursSystem: boolean;
  isCaps: boolean;
  cameraBrand: string;
  policierName: string;
  policierBadgeNumber: number;
  policeDepartement: string;
  size: number;
  style: number;
};

export const BodyCamContext = React.createContext<BodyCamContextType>({
  state: true,
  hoursSystem: true,
  isCaps: true,
  cameraBrand: 'XION',
  policierName: 'John',
  policierBadgeNumber: 123,
  policeDepartement: 'LOS SANTOS POLICE DEPARTEMENT',
  size: 13,
  style: 2,
});
