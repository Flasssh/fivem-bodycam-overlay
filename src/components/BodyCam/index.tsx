import '../../style/bodycam.scss';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  matricule: number;
  departement: string;
  cameraBrand: string;
  fullCaps: boolean;
  twelveHoursSys: boolean;
  isActivated: boolean;
}

type CamUiType = {
  float: string;
  textAlign: string;
};

const CamUi = styled.div<CamUiType>`
  float: ${(props) => props.float};
  width: auto;
  text-align: ${(props) => props.textAlign};
  margin: 10px;
`;

// https://github.com/zhivotnoya/XION-ChaseCam

export function BodyCam({
  name,
  matricule,
  departement,
  cameraBrand,
  isActivated,
  fullCaps,
  twelveHoursSys,
}: Props) {
  const [now, setDate] = useState(new Date());

  let brandDashCam;
  let playerName;
  let playerMatricule = matricule || 1;
  let playerDepartement;

  if (fullCaps) {
    brandDashCam = cameraBrand.toUpperCase() || 'undefined';
    playerName = name.toUpperCase() || 'undefined';
    playerDepartement = departement.toUpperCase() || 'LOS SANTOS POLICE DEPARTEMENT';
  } else {
    brandDashCam = cameraBrand || 'undefined';
    playerName = name || 'undefined';
    playerDepartement = departement || 'LOS SANTOS POLICE DEPARTEMENT';
  }

  let monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Date
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  // Time
  let hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

  let currentTime;
  if (twelveHoursSys) {
    let aMpM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds} ${aMpM}`;
  } else {
    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      <CamUi float="right" textAlign="right">
        <div className="bg-black	opacity-40 rounded p-1">
          <div className="blink-group">
            REC
            {isActivated && <div className="blink-circle blink-rec"></div>}
            {!isActivated && <div className="blink-circle no-blink-rec"></div>}
            {brandDashCam}
          </div>
          <div>
            {playerName} [{playerMatricule}]
          </div>
          <div>{playerDepartement}</div>
          <div>{currentTime}</div>
        </div>
      </CamUi>
    </div>
  );
}
