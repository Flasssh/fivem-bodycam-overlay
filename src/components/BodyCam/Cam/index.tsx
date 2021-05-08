import React, { useContext } from 'react';
import styled from 'styled-components';

import { BodyCamContext } from '../../../context';
import { Rec } from '../Rec';
import { Time } from '../Time/time';

const CamContent = styled.div`
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 10px;

  & > div {
    height: 20px;
    line-height: 20px;
  }
`;

const CamHeader = styled.div`
  display: flex;
`;

const CamPolicier = styled.div``;

const CamDepartement = styled.div``;

const CamTime = styled.div``;

interface Props {
  state: boolean;
  hoursSystem: boolean;
  isCaps: boolean;
  cameraBrand: string;
  policierName: string;
  policeDepartement: string;
  policierBadgeNumber: number;
  style: number;
  isPulse: boolean;
}

export function Cam() {
  let {
    state,
    isPulse,
    hoursSystem,
    isCaps,
    cameraBrand,
    policierName,
    policeDepartement,
    policierBadgeNumber,
  }: Props = useContext(BodyCamContext);

  if (isCaps) {
    policeDepartement = policeDepartement.toUpperCase();
    policierName = policierName.toUpperCase();
    cameraBrand = cameraBrand.toUpperCase();
  }

  return (
    <CamContent>
      <CamHeader>
        REC <Rec isActive={state} isPulse={isPulse} /> {cameraBrand}
      </CamHeader>
      <CamPolicier>
        {policierName} [{policierBadgeNumber}]
      </CamPolicier>
      <CamDepartement>{policeDepartement}</CamDepartement>
      <CamTime>
        <Time twelveHoursSys={hoursSystem} />
      </CamTime>
    </CamContent>
  );
}
