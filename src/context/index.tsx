import cookie from 'cookie';
import faker from 'faker';
import React from 'react';

// Context Initial Value
export type BodyCamContextType = {
  // Boolean
  state: boolean;
  isPulse: boolean;
  hoursSystem: boolean;
  isCaps: boolean;
  // String
  cameraBrand: string;
  policierName: string;
  policeDepartement: string;
  position: string;
  textAlign: string;
  // number
  policierBadgeNumber: number;
  size: number;

  // Object
  backgroundColor: { r: number; g: number; b: number; a: number };
};

// Generated random
const generatedPolicierName = faker.name.findName();
const generatedPolicierBageNuber = faker.datatype.number({
  min: 1,
  max: 999,
});

let cookieData = null;
if (document.cookie) {
  let cookieParse = cookie.parse(document.cookie);
  if (cookieParse.data && cookieParse.data != 'undefined') {
    cookieData = JSON.parse(cookieParse.data);
  }
}

let initialGlobalState = {
  state: cookieData?.state || true,
  isPulse: cookieData?.isPulse || true,
  hoursSystem: cookieData?.hoursSystem || true,
  isCaps: cookieData?.isCaps || true,
  cameraBrand: cookieData?.cameraBrand || 'XION DASCHCAM',
  policierName: cookieData?.policierName || generatedPolicierName,
  policierBadgeNumber: cookieData?.policierBadgeNumber || generatedPolicierBageNuber,
  policeDepartement: cookieData?.policeDepartement || 'LOS SANTOS POLICE DEPARTEMENT',
  size: cookieData?.size || 13,
  position: cookieData?.position || 'top-left',
  textAlign: cookieData?.textAlign || 'right',
  backgroundColor: cookieData?.backgroundColor || { r: 0, g: 0, b: 0, a: 0.2 },
};

// @ts-ignore
export const BodyCamContext = React.createContext<BodyCamContextType>(initialGlobalState);
export const DispatchBodyCamContext = React.createContext<BodyCamContextType | undefined>(
  undefined,
);

// State, Dispatch
interface Props {
  children: React.ReactChild | React.ReactChildren;
}

// Provider
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
