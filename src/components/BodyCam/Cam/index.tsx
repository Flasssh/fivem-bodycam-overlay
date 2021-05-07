import React from 'react';
import styled from 'styled-components';

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

export function Cam() {
  return (
    <CamContent>
      <CamHeader>
        REC <Rec isActive={true} /> XION CHASE-CAM
      </CamHeader>
      <CamPolicier>M. Marino [37]</CamPolicier>
      <CamDepartement>LOS SANTOS POLICE DEPARTEMENT</CamDepartement>
      <CamTime>
        <Time twelveHoursSys={true} />
      </CamTime>
    </CamContent>
  );
}
