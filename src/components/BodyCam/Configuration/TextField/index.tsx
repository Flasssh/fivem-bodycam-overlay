import React, { useState } from 'react';
import styled from 'styled-components';

type TypeContent = {
  isOpen: boolean;
};

const TextFieldContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 40px;')}
  overflow: hidden;
`;

const TextFieldHeader = styled.div`
  padding: 10px 10px 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const TextFieldBody = styled.div`
  padding: 0 10px 10px 10px;
`;

const TextFieldTitle = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
`;

const TextFieldCheckbox = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
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

export function TextField({ callback }: Props) {
  const [stateAccordion, setStateAccordion] = useState(false);
  let icon = stateAccordion ? '-' : '+';

  callback(null);

  return (
    <TextFieldContent isOpen={stateAccordion}>
      <TextFieldHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <TextFieldTitle>DASHCAM TextField</TextFieldTitle>
        <Icon>{icon}</Icon>
      </TextFieldHeader>
      <TextFieldBody>
        <TextFieldCheckbox></TextFieldCheckbox>
      </TextFieldBody>
    </TextFieldContent>
  );
}
