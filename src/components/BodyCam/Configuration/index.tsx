import React from 'react';
import styled from 'styled-components';

import { CreateLink } from './CreateLink';
import { Option } from './Option/index';
import { Size } from './Size';
import { Style } from './Style';
import { TextField } from './TextField';

const ConfigurationContent = styled.div`
  margin-top: 15px;

  & > div {
    margin-bottom: 20px;
    border-radius: 6px;
  }
`;

export function Configuration() {
  let JSON = {
    option: {
      state: true,
      hoursSystem: true,
      isCaps: true,
    },
    textField: {
      cameraBrand: 'XION',
      policierName: 'John',
      policierBadgeNumber: 123,
      policeDepartement: 'LOS SANTOS POLICE DEPARTEMENT',
    },
    size: 13,
    style: 2,
  };

  const callBackOption = (data: any) => {
    JSON.option.state = data[0];
    JSON.option.hoursSystem = data[1];
    JSON.option.isCaps = data[2];
    callBack(JSON);
  };

  const textFieldCallBack = (data: any) => {
    JSON.textField.cameraBrand = data[0];
    JSON.textField.policierName = data[1];
    JSON.textField.policierBadgeNumber = data[2];
    JSON.textField.policeDepartement = data[3];
    callBack(JSON);
  };

  const sizeCallBack = (data: any) => {
    if (JSON.size != data) {
      JSON.size = data;
      callBack(JSON);
    }
  };

  const styleCallback = (data: any) => {
    JSON.style = data;
    callBack(JSON);
  };

  const callBack = (data: any) => {
    console.log(data);
  };

  return (
    <ConfigurationContent>
      <Option callback={callBackOption} />
      <TextField callback={textFieldCallBack} />
      <Size callback={sizeCallBack} />
      <Style callback={styleCallback} />
      <CreateLink />
    </ConfigurationContent>
  );
}
