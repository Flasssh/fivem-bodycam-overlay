import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.div`
  position: block;
  bottom: 0;
`;

const FooterText = styled.p`
  font-family: 'Share Tech Mono', monospace;
  color: #c4c4c4;
  text-align: center;
`;

const Hearth = styled.span`
  color: red;
`;

const FooterLink = styled.a`
  outline: none;
  text-decoration: none;
  color: #c4c4c4;
`;

export function Footer() {
  return (
    <FooterContent>
      <FooterText>
        Made with <Hearth>♥</Hearth> in Switzerland, by <span> </span>
        <FooterLink href="https://github.com/Flasssh" target="_blank" rel="noreferrer">
          Flasssh
        </FooterLink>
      </FooterText>
    </FooterContent>
  );
}
