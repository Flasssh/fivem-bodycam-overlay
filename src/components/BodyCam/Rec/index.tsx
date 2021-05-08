import React from 'react';
import styled from 'styled-components';

type BlinkType = {
  isActive: boolean;
};

const BlinkCircle = styled.div<BlinkType>`
  background-color: #c40d0d;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin: 3px 5px 0 5px;

  ${({ isActive }) =>
    isActive
      ? 'animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;'
      : 'background-color: rgb(99, 13, 13);opacity: 0.3;'}
`;

const PulseRec = styled.span<BlinkType>`
  display: block;
  margin: 3px 5px 0 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #c40d0d;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  ${({ isActive }) => (isActive ? 'animation: pulse 2s infinite;' : 'animation: none;')}
`;

interface Props {
  isActive: boolean;
  isPulse?: boolean;
}

export function Rec({ isActive, isPulse }: Props) {
  return (
    <div>
      {isPulse && <PulseRec isActive={isActive} />}
      {!isPulse && <BlinkCircle isActive={isActive} />}
    </div>
  );
}
