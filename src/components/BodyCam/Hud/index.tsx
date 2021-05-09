import React from 'react';
import styled from 'styled-components';

import { useGlobalState } from '../../../context';
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
}

export function Hud({ position }: Props) {
  const [state, dispatch] = useGlobalState();

  let isSelected;

  if (state?.position === position) {
    isSelected = true;
  }

  let positionV = position.split('-')[0];
  let positionH = position.split('-')[1];

  const handleClick = () => {
    // @ts-ignore
    dispatch({ position });
  };

  if (isSelected) {
    return (
      <HudCamContent
        positionVertical={positionV}
        positionHorizontal={positionH}
        size={state?.size}>
        <Cam />
      </HudCamContent>
    );
  }

  return (
    <HudContent
      onClick={handleClick}
      positionVertical={positionV}
      positionHorizontal={positionH}
    />
  );
}
