import React from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useClipboard } from 'use-clipboard-copy';

const Link = styled.button`
  background: #a30036;
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  width: 100%;

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const LinkFront = styled.span`
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: #f0003c;
  color: white;
  transform: translateY(-4px);
  font-weight: 800;
`;

const LinkContent = styled.div`
  width: 100%;
  margin-top: 36px;
`;

export function CreateLink() {
  const clipboard = useClipboard();

  const handleClick = () => {
    if (clipboard.isSupported()) {
      clipboard.copy('12345');
      toast.success('Successfully copied!');
    } else {
      toast.error('We can\t copy on the clipboard');
    }
  };

  return (
    <LinkContent>
      <Link>
        <LinkFront onClick={handleClick} className="front">
          Copiez le lien.
        </LinkFront>
      </Link>
    </LinkContent>
  );
}
