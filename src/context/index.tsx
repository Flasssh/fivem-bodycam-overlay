import faker from 'faker';
import React from 'react';

// Context Initial Value
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
  position: string;
};

const generatedPolicierName = faker.name.findName();
const generatedPolicierBageNuber = faker.datatype.number({
  min: 1,
  max: 999,
});

let initialGlobalState = {
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
  position: 'top-left',
};

export const BodyCamContext = React.createContext<BodyCamContextType>(initialGlobalState);
export const DispatchBodyCamContext = React.createContext<BodyCamContextType | undefined>(
  undefined,
);

// State, Dispatch

interface Props {
  children: React.ReactChild | React.ReactChildren;
}

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    initialGlobalState,
  );
  return (
    <BodyCamContext.Provider value={state}>
      <DispatchBodyCamContext.Provider value={dispatch}>
        {children}
      </DispatchBodyCamContext.Provider>
    </BodyCamContext.Provider>
  );
};

export const useGlobalState = () => [
  React.useContext(BodyCamContext),
  React.useContext(DispatchBodyCamContext),
];
