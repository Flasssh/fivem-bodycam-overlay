import React, { useState } from 'react';
import Slider from 'react-input-slider';
import styled from 'styled-components';

type TypeContent = {
  isOpen: boolean;
};

const SizeContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 40px;')}
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
`;

const SizeTitle = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
`;

const Icon = styled.span`
  text-decoration: none;
  color: #ƒff;
  outline: none;
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

  return (
    <SizeContent isOpen={stateAccordion}>
      <SizeHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <SizeTitle>Size</SizeTitle>
        <Icon>{icon}</Icon>
      </SizeHeader>
      <SizeBody>
        <Slider
          x={sizeValue.x}
          axis="x"
          onChange={({ x }) => setSizeValue({ x })}
          xmax={21}
          xmin={10}
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
      </SizeBody>
    </SizeContent>
  );
}
