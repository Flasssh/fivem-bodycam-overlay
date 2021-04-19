import '../../style/bodycam.scss';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  matricule: number;
  departement: string;
  cameraBrand: string;
  lightMode: boolean;
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

export function BodyCam({ name, matricule, departement, cameraBrand, lightMode }: Props) {
  const [now, setDate] = useState(new Date());

  console.log('LighMode: ' + lightMode);

  let playerName = name.toUpperCase() || 'undefined';
  let playerMatricule = matricule || 'undefined';
  let playerDepartement = departement.toUpperCase() || 'LOS SANTOS POLICE DEPARTEMENT';

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

  let currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds}`;

  return (
    <div>
      <CamUi float="right" textAlign="right">
        <div className="bg-black	opacity-40 rounded p-1">
          <div className="blink-group">
            REC <div className="blink-circle blink-rec"></div>
            {cameraBrand}
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
