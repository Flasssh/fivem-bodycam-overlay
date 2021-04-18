import '../../style/bodycam.scss';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  matricule: number;
  departement: string;
  cameraBrand: string;
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

export function BodyCam({ name, matricule, departement, cameraBrand }: Props) {
  const [date, setDate] = useState(new Date());

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

  let currentTime = `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

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
