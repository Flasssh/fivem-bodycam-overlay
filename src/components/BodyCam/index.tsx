import '../../style/bodycam.scss';

import faker from 'faker';
import React from 'react';
import styled from 'styled-components';

import { Time } from '../Time/time';

interface Props {
  name: string;
  matricule: number;
  departement: string;
  cameraBrand: string;
  fullCaps: boolean;
  twelveHoursSys: boolean;
  isActivated: boolean;
  styleNumber: number;
  emplacement: string;
  parentCallback: any;
  isSelected: boolean;
  sizeHud: number;
}

type CamUiType = {
  textAlign: string;
  horizontalPosition: string;
  verticalPosition: string;
  isSelected: boolean;
  sizeHud: number;
};

const CamUi = styled.div<CamUiType>`
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0.5')};
  ${({ isSelected }) => (isSelected ? 'cursor: auto;' : 'cursor: pointer;')}
  ${({ verticalPosition }) => (isBottom(verticalPosition) ? 'bottom: 0;' : 'top: 0;')}
  ${({ horizontalPosition }) => (isRight(horizontalPosition) ? 'right: 0;' : 'left: 0;')}
  text-align: ${({ textAlign }) => textAlign};
  margin: 10px;
  width: auto;
  transition: 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  font-size: ${({ sizeHud }) => sizeHud}px;

  &:hover {
    opacity: 1;
  }
`;

type BlinkType = {
  size: number;
  isActive: boolean;
};

const BlinkCircle = styled.div<BlinkType>`
  background-color: rgb(196, 13, 13);
  border-radius: 50%;
  width: ${(props) => props.size - 3}px;
  height: ${(props) => props.size - 3}px;
  margin: 5px 3px 0 3px;

  ${({ isActive }) =>
    isActive
      ? 'animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;'
      : 'background-color: rgb(99, 13, 13);opacity: 0.3;'}
`;

function isBottom(position: string) {
  if (position === 'bottom') {
    return true;
  }
  return false;
}

function isRight(position: string) {
  if (position === 'right') {
    return true;
  }
  return false;
}

let defaultName: string = faker.name.findName();
let defaultMatricule: number = faker.datatype.number({
  min: 1,
  max: 999,
});

export function BodyCam({
  name,
  matricule,
  departement,
  cameraBrand,
  isActivated,
  fullCaps,
  twelveHoursSys,
  styleNumber,
  emplacement,
  parentCallback,
  isSelected,
  sizeHud,
}: Props) {
  let brandDashCam;
  let playerName;
  let playerMatricule = matricule || defaultMatricule;
  let playerDepartement;

  if (fullCaps) {
    brandDashCam = cameraBrand.toUpperCase() || 'FIVEMBRAND';
    playerName = name.toUpperCase() || defaultName.toUpperCase();
    playerDepartement = departement.toUpperCase() || 'LOS SANTOS POLICE DEPARTEMENT';
  } else {
    brandDashCam = cameraBrand || 'FIVEMBRAND';
    playerName = name || defaultName;
    playerDepartement = departement || 'Los Santos Police Departement';
  }

  if (styleNumber > 3 || styleNumber < 1) {
    styleNumber = 1;
  }

  if (!isEmplacementValid(emplacement)) {
    emplacement = 'top-left';
  }

  function isEmplacementValid(position: string) {
    let validList = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

    for (let i = 0; i < validList.length; i++) {
      if (position != validList[i]) {
        return true;
      }
    }

    return false;
  }

  let verticalPosition = emplacement.split('-')[0];
  let horizontalPosition = emplacement.split('-')[1];

  const handleClick = () => {
    parentCallback(emplacement);
  };

  console.log(sizeHud);

  return (
    <div>
      <CamUi
        onClick={handleClick}
        horizontalPosition={horizontalPosition}
        verticalPosition={verticalPosition}
        isSelected={isSelected}
        sizeHud={sizeHud}
        textAlign="right">
        <div className="bg-black	opacity-40 rounded p-1">
          <div className="blink-group">
            REC
            <BlinkCircle isActive={isActivated} size={sizeHud} />
            {brandDashCam}
          </div>
          <div>
            {playerName} [{playerMatricule}]
          </div>
          <div>{playerDepartement}</div>
          <Time twelveHoursSys={twelveHoursSys} />
        </div>
      </CamUi>
    </div>
  );
}
