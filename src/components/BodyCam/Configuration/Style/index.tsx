import React, { useState } from 'react';
import styled from 'styled-components';

type TypeContent = {
  isOpen: boolean;
};

const StyleContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 45px;')}
  overflow: hidden;
`;

const StyleHeader = styled.div`
  padding: 10px 10px 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const StyleBody = styled.div`
  margin-top: 15px;
  padding: 0 10px 20px 10px;
  display: flex;
  padding-bottom: 16px;
  justify-content: space-between;
`;

const StyleTitle = styled.div`
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

const StyledRadioContent = styled.label`
  cursor: pointer;
  display: flex;
  user-select: none;
`;

const StyledTemplate = styled.div`
  width: 200px;
  height: 112.5px;
  background-color: #e3e3e3;
  border-radius: 6px;
  box-shadow: 0 0 2px 0 #111827;
  color: black;
`;

const StyleRadio = styled.input`
  border: 1px solid #111827;
`;

interface Props {
  callback: any;
}

export function Style({ callback }: Props) {
  const [stateAccordion, setStateAccordion] = useState(false);
  let icon = stateAccordion ? '-' : '+';

  const [selectedOption, setSelectedOption] = useState(1);

  callback(selectedOption);

  return (
    <StyleContent isOpen={stateAccordion}>
      <StyleHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <StyleTitle>Style</StyleTitle>
        <Icon>{icon}</Icon>
      </StyleHeader>
      <StyleBody>
        <StyledRadioContent>
          <StyleRadio
            type="radio"
            name="style"
            checked={selectedOption === 1}
            onChange={() => {
              setSelectedOption(1);
            }}
          />
          <StyledTemplate>1</StyledTemplate>
        </StyledRadioContent>
        <StyledRadioContent>
          <StyleRadio
            type="radio"
            name="style"
            checked={selectedOption === 2}
            onChange={() => {
              setSelectedOption(2);
            }}
          />
          <StyledTemplate>2</StyledTemplate>
        </StyledRadioContent>
        <StyledRadioContent>
          <StyleRadio
            type="radio"
            name="style"
            checked={selectedOption === 3}
            onChange={() => {
              setSelectedOption(3);
            }}
          />
          <StyledTemplate>3</StyledTemplate>
        </StyledRadioContent>
      </StyleBody>
    </StyleContent>
  );
}
