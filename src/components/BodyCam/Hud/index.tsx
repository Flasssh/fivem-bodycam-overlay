import React, { useContext } from 'react';
import styled from 'styled-components';

import { BodyCamContext } from '../../../context';
import { Cam } from '../Cam';

const HudContent = styled.div<HudStyle>`
  width: 270px;
  height: 100px;

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

const HudCamContent = styled.div<HudStyle>`
  width: auto;
  height: auto;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
  user-select: none;
  position: absolute;
  ${(props) => props.positionHorizontal}: 0;
  ${(props) => props.positionVertical}: 0;
  font-size: ${(props) => props.size}px;
`;

type HudStyle = {
  positionVertical: string;
  positionHorizontal: string;
  size?: number;
};

interface Props {
  position: string;
  isSelected: boolean;
}

interface PropsContext {
  size: number;
}

export function Hud({ position, isSelected }: Props) {
  const { size }: PropsContext = useContext(BodyCamContext);

  if (isSelected) {
    return (
      <HudCamContent
        positionVertical={position.split('-')[0]}
        positionHorizontal={position.split('-')[1]}
        size={size}>
        <Cam />
      </HudCamContent>
    );
  }
  return (
    <HudContent
      positionVertical={position.split('-')[0]}
      positionHorizontal={position.split('-')[1]}
    />
  );
}
