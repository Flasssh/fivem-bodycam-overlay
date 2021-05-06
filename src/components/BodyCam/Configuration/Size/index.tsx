import React, { useState } from 'react';
import Slider from 'react-input-slider';
import styled from 'styled-components';

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

interface Props {
  callback: any;
}

export function Size({ callback }: Props) {
  const [stateAccordion, setStateAccordion] = useState(false);
  let icon = stateAccordion ? '-' : '+';

  const [sizeValue, setSizeValue] = useState({ x: 14 });
  callback(sizeValue.x);

  const MINIMUM_SIZE = 10;
  const MAXIMUM_SIZE = 21;

  return (
    <SizeContent isOpen={stateAccordion}>
      <SizeHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <SizeTitle>Size</SizeTitle>
        <Icon>{icon}</Icon>
      </SizeHeader>
      <SizeBody>
        <SizeInformationSlider>{MINIMUM_SIZE}</SizeInformationSlider>
        <Slider
          x={sizeValue.x}
          axis="x"
          onChange={({ x }) => setSizeValue({ x })}
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
