import React from 'react';
import styled from 'styled-components';

import { Hud } from '../Hud';

const PreviewContent = styled.div`
  width: calc(800px - 4px);
  height: calc(450px - 4px);
  background-color: rgb(255, 255, 255);
  border: 2px solid rgba(107, 114, 128, 1);
  border-radius: 6px;
  margin-top: 15px;
`;

const PreviewContentBorder = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
  position: relative;
`;

export function Preview() {
  return (
    <PreviewContent>
      <PreviewContentBorder>
        <Hud isSelected={true} position={'top-left'} />
        <Hud isSelected={false} position={'top-right'} />
        <Hud isSelected={false} position={'bottom-left'} />
        <Hud isSelected={false} position={'bottom-right'} />
      </PreviewContentBorder>
    </PreviewContent>
  );
}
