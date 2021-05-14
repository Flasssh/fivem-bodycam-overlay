import React, { useState } from 'react';
import Checkbox from 'react-custom-checkbox';
import styled from 'styled-components';

import { useGlobalState } from '../../../../context';
import { ChangeColor } from '../ChangeColor';

type TypeContent = {
  isOpen: boolean;
};

const OptionContent = styled.div<TypeContent>`
  background-color: rgba(32, 37, 50, 1);
  border: 1px solid rgba(11, 18, 32, 1);
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 45px;')}
  overflow: hidden;
`;

const OptionHeader = styled.div`
  padding: 10px 10px 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const OptionBody = styled.div`
  padding: 0 10px 10px 10px;
`;

const OptionTitle = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
`;

const OptionCheckbox = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  & > label {
    cursor: pointer;
  }
`;

const Icon = styled.span`
  text-decoration: none;
  color: #ƒff;
  outline: none;
  user-select: none;
  line-height: 27px;
`;

const Separation = styled.hr`
  margin: 12px 0 14px 0;
`;

const ChangeColorSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ChangeColorGroup = styled.div`
  display: flex;
  line-height: 24px;

  & > div {
    margin-left: 10px;
  }
`;

export function Option() {
  const [state, dispatch] = useGlobalState();

  const [stateAccordion, setStateAccordion] = useState(true);

  let icon = stateAccordion ? '-' : '+';

  return (
    <OptionContent isOpen={stateAccordion}>
      <OptionHeader onClick={() => setStateAccordion(!stateAccordion)}>
        <OptionTitle>DASHCAM OPTION</OptionTitle>
        <Icon>{icon}</Icon>
      </OptionHeader>
      <OptionBody>
        <OptionCheckbox>
          <Checkbox
            label="ON/OFF"
            name="CamState"
            checked={state?.state}
            onChange={(value: boolean) => {
              // @ts-ignore
              dispatch({ state: value });
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none">
                <path d="M1 7L4.5 9.5L11 1" stroke="white" strokeWidth="2" />
              </svg>
            }
            borderColor="#0B1220"
            borderRadius={0}
            style={{ cursor: 'pointer' }}
            labelStyle={{ marginLeft: 5, userSelect: 'none' }}
          />
          <Checkbox
            label="TIMEZONE"
            name="timezone"
            checked={state?.showTimeZone}
            onChange={(value: boolean) => {
              // @ts-ignore
              dispatch({ showTimeZone: value });
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none">
                <path d="M1 7L4.5 9.5L11 1" stroke="white" strokeWidth="2" />
              </svg>
            }
            borderColor="#0B1220"
            borderRadius={0}
            style={{ cursor: 'pointer' }}
            labelStyle={{ marginLeft: 5, userSelect: 'none' }}
          />
          <Checkbox
            label="Rec Pulse"
            name="recPulse"
            checked={state?.isPulse}
            onChange={(value: boolean) => {
              // @ts-ignore
              dispatch({ isPulse: value });
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none">
                <path d="M1 7L4.5 9.5L11 1" stroke="white" strokeWidth="2" />
              </svg>
            }
            borderColor="#0B1220"
            borderRadius={0}
            style={{ cursor: 'pointer' }}
            labelStyle={{ marginLeft: 5, userSelect: 'none' }}
          />
          <Checkbox
            label="12H/24H"
            name="hoursSystem"
            checked={state?.hoursSystem}
            onChange={(value: boolean) => {
              // @ts-ignore
              dispatch({ hoursSystem: value });
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none">
                <path d="M1 7L4.5 9.5L11 1" stroke="white" strokeWidth="2" />
              </svg>
            }
            borderColor="#0B1220"
            borderRadius={0}
            style={{ cursor: 'pointer' }}
            labelStyle={{ marginLeft: 5, userSelect: 'none' }}
          />
          <Checkbox
            label="FULL CAPS"
            name="fullCaps"
            checked={state?.isCaps}
            onChange={(value: boolean) => {
              // @ts-ignore
              dispatch({ isCaps: value });
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none">
                <path d="M1 7L4.5 9.5L11 1" stroke="white" strokeWidth="2" />
              </svg>
            }
            borderColor="#0B1220"
            borderRadius={0}
            style={{ cursor: 'pointer' }}
            labelStyle={{ marginLeft: 5, userSelect: 'none' }}
          />
        </OptionCheckbox>
        <Separation />
        <ChangeColorSection>
          <ChangeColorGroup>
            <span>BACKGROUND COLOR: </span>
            <ChangeColor />
          </ChangeColorGroup>
        </ChangeColorSection>
      </OptionBody>
    </OptionContent>
  );
}
