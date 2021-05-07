import React from 'react';
import styled from 'styled-components';

import { Cam } from '../Cam';

const HudContent = styled.div<HudStyle>`
  min-width: 270px;
  min-height: 100px;
  max-width: 300px;
  max-height: 150px;
  width: 380px;
  height: auto;

  opacity: 0.4;
  background: rgba(0, 0, 0, 0.1);
  border: 1px dashed #000000;
  border-radius: 6px;
  box-sizing: border-box;
  transition: 0.1s;
  user-select: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  position: absolute;
  ${(props) => props.positionHorizontal}: 0;
  ${(props) => props.positionVertical}: 0;
`;

const HudCamContent = styled.div`
  min-width: 270px;
  min-height: 100px;
  max-width: 300px;
  max-height: 150px;
  width: 380px;
  height: auto;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
  user-select: none;
  position: relative;
`;

type HudStyle = {
  positionVertical: string;
  positionHorizontal: string;
};

interface Props {
  position: string;
  isSelected: boolean;
}

export function Hud({ position, isSelected }: Props) {
  console.log(isSelected);
  return (
    <div>
      {isSelected && (
        <HudCamContent>
          <Cam />
        </HudCamContent>
      )}
      {!isSelected && (
        <HudContent
          positionVertical={position.split('-')[0]}
          positionHorizontal={position.split('-')[1]}
        />
      )}
    </div>
  );
}
