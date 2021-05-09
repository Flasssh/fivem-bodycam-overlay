import React, { useState } from 'react';
import styled from 'styled-components';

import { useGlobalState } from '../../../../context';

type TypeContent = {
  isOpen: boolean;
};

const TextFieldContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 45px;')}
  overflow: hidden;
`;

const TextFieldHeader = styled.div`
  padding: 10px 10px 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const TextFieldBody = styled.div`
  margin-top: 15px;
  padding: 0 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. .'
    '. .';
`;

const TextFieldTitle = styled.div`
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

const TextFieldInput = styled.input`
  border: none;
  box-shadow: 0 0 0 2px rgba(11, 18, 32, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  outline: none;
  height: 28px;
  width: calc(100% - 10px);
  background-color: rgb(17, 24, 40);
  color: #fff;
  padding: 3px 6px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.7);
    border: none;
  }
`;

export function TextField() {
  const [stateAccordion, setStateAccordion] = useState(false);
  let icon = stateAccordion ? '-' : '+';

  const [state, dispatch] = useGlobalState();

  return (
    <TextFieldContent isOpen={stateAccordion}>
      <TextFieldHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <TextFieldTitle>TextField</TextFieldTitle>
        <Icon>{icon}</Icon>
      </TextFieldHeader>
      <TextFieldBody>
        <TextFieldInput
          type="text"
          value={state?.cameraBrand}
          // @ts-ignore
          onChange={(e) => dispatch({ cameraBrand: e.target.value })}
          placeholder="Camera Brand"
        />
        <TextFieldInput
          type="text"
          value={state?.policierName}
          // @ts-ignore
          onChange={(e) => dispatch({ policierName: e.target.value })}
          placeholder="Policier Name"
        />
        <TextFieldInput
          type="number"
          value={state?.policierBadgeNumber}
          // @ts-ignore
          onChange={(e) => dispatch({ policierBadgeNumber: e.target.value })}
          placeholder="Policier Badge"
        />
        <TextFieldInput
          type="text"
          value={state?.policeDepartement}
          // @ts-ignore
          onChange={(e) => dispatch({ policeDepartement: e.target.value })}
          placeholder="Police Departement"
        />
      </TextFieldBody>
    </TextFieldContent>
  );
}
