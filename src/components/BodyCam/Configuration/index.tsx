import React from 'react';
import styled from 'styled-components';

import { Option } from './Option/index';

const ConfigurationContent = styled.div`
  margin-top: 15px;
`;

export function Configuration() {
  return (
    <ConfigurationContent>
      <Option />
    </ConfigurationContent>
  );
}
