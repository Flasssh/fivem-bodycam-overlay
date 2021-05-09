import React, { useState } from 'react';
import Slider from 'react-input-slider';
import styled from 'styled-components';

import { useGlobalState } from '../../../../context';

type TypeContent = {
  isOpen: boolean;
};

const SizeContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 45px;')}
  overflow: hidden;
`;

const SizeHeader = styled.div`
  padding: 10px 10px 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const SizeBody = styled.div`
  margin-top: 15px;
  padding: 0 10px 10px 10px;
  display: flex;
  justify-content: space-between;

  & .css-1ckl14q-Slider {
    margin-top: 5px;
    width: 90% !important;
  }
`;

const SizeTitle = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
`;

const Icon = styled.span`
  text-decoration: none;
  color: #ƒff;
  outline: none;
  user-select: none;
  line-height: 27px;
`;

const SizeInformationSlider = styled.span`
  color: #fff;
  margin: 0 4px;
  width: 20px;
  text-align: center;
  user-select: none;
`;

export function Size() {
  const [stateAccordion, setStateAccordion] = useState(false);
  let icon = stateAccordion ? '-' : '+';

  const MINIMUM_SIZE = 10;
  const MAXIMUM_SIZE = 21;

  const [state, dispatch] = useGlobalState();

  let prevX = state?.size;
  const handleChangeSize = (x: number) => {
    if (x != prevX) {
      prevX = x;
      // @ts-ignore
      dispatch({ size: x });
    }
  };

  return (
    <SizeContent isOpen={stateAccordion}>
      <SizeHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <SizeTitle>Size</SizeTitle>
        <Icon>{icon}</Icon>
      </SizeHeader>
      <SizeBody>
        <SizeInformationSlider>{MINIMUM_SIZE}</SizeInformationSlider>
        <Slider
          x={state?.size}
          axis="x"
          onChange={({ x }) => handleChangeSize(x)}
          xmax={MAXIMUM_SIZE}
          xmin={MINIMUM_SIZE}
          xstep={1}
          styles={{
            track: {
              backgroundColor: '#c4c4c4',
              borderRadius: '6px',
              width: '100%',
            },
            active: {
              backgroundColor: '#0B1220',
              borderRadius: '6px',
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor: '#fff',
            },
          }}
        />
        <SizeInformationSlider>{MAXIMUM_SIZE}</SizeInformationSlider>
      </SizeBody>
    </SizeContent>
  );
}
