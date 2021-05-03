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
  const callBackOption = (data: any) => {
    console.log('Option: ' + data);
  };

  const textFieldCallBack = (data: any) => {
    console.log('TextField: ' + data);
  };

  const sizeCallBack = (data: any) => {
    console.log('Size: ' + data);
  };

  const styleCallback = (data: any) => {
    console.log('Style: ' + data);
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
