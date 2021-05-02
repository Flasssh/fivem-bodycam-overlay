import React, { useState } from 'react';
import Checkbox from 'react-custom-checkbox';
import styled from 'styled-components';

const OptionContent = styled.div`
    background-color: rgba(32, 37, 50, 1);
    border: 1px solid rgba(11, 18, 32, 1)
    width: 100%;
    height: auto;
    padding: 10px;
`;

const OptionHeader = styled.div``;

const OptionBody = styled.div``;

const OptionTitle = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
`;

const OptionCheckbox = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export function Option() {
  const [isTrunOn, setCamState] = useState(false);
  const [hoursSystem, setHoursSystem] = useState(false);
  const [isFullCaps, setFullCaps] = useState(false);

  return (
    <OptionContent>
      <OptionHeader>
        <OptionTitle>DASHCAM OPTION</OptionTitle>
      </OptionHeader>
      <OptionBody>
        <OptionCheckbox>
          <Checkbox
            label="ON/OFF"
            name="CamState"
            checked={isTrunOn}
            onChange={(value: boolean) => {
              setCamState(value);
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
            checked={hoursSystem}
            onChange={(value: boolean) => {
              setHoursSystem(value);
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
            checked={isFullCaps}
            onChange={(value: boolean) => {
              setFullCaps(value);
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
      </OptionBody>
    </OptionContent>
  );
}
