import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

import { useGlobalState } from '../../../../context';

type ColorShowType = {
  colors: any;
};

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div``;

const ColorShow = styled.div<ColorShowType>`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${({ colors }) =>
    `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a})`};
`;

export function ChangeColor() {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [state, dispatch] = useGlobalState();

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleSetColor = (color: any) => {
    // @ts-ignore
    dispatch({ backgroundColor: color.rgb });
  };

  return (
    <div>
      <Swatch onClick={handleClick}>
        <ColorShow colors={state?.backgroundColor} />
      </Swatch>
      {displayColorPicker ? (
        <Popover>
          <Cover onClick={handleClick}>
            <SketchPicker color={state?.backgroundColor} onChange={handleSetColor} />
          </Cover>
        </Popover>
      ) : null}
    </div>
  );
}
