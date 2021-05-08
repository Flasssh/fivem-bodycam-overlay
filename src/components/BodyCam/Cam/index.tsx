import React, { useContext } from 'react';
import styled from 'styled-components';

import { BodyCamContext } from '../../../context';
import { Rec } from '../Rec';
import { Time } from '../Time/time';

const CamContent = styled.div`
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 10px;
  position: absolute;

  & > div {
    height: 20px;
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
  size: number;
  style: number;
}

export function Cam() {
  const {
    state,
    hoursSystem,
    cameraBrand,
    policierName,
    policeDepartement,
    policierBadgeNumber,
  }: Props = useContext(BodyCamContext);

  return (
    <CamContent>
      <CamHeader>
        REC <Rec isActive={state} /> {cameraBrand}
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
