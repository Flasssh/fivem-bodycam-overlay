import React from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useClipboard } from 'use-clipboard-copy';

import { useGlobalState } from '../../../../context';

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
  display: flex;
`;

const LinkContentCopy = styled.div`
  width: calc(70% - 10px);
  margin-right: 10px;
`;

const LinkContentSave = styled.div`
  width: calc(30% - 10px);
  margin-left: 10px;
`;

export function CreateLink() {
  const clipboard = useClipboard();

  const [state] = useGlobalState();
  const [cookies, setCookie] = useCookies(['data']);

  const handleClick = () => {
    if (clipboard.isSupported()) {
      // TODO: recupt context

      clipboard.copy(`https://localhost:3000/}`);
      toast.success('Successfully copied!');
    } else {
      toast.error('We can\t copy on the clipboard');
    }
  };

  const handleCookieSave = async () => {
    return new Promise((res, rej) => {
      if (!state) {
        rej('Could not get the configuration.');
      }

      setCookie('data', state, {
        path: '/',
        secure: true,
        sameSite: true,
      });

      let attemps = 0;
      setInterval(() => {
        if (attemps >= 5) {
          rej('Could not save.');
        }

        if (!cookies.data) {
          attemps++;
        }

        if (cookies.data) {
          res('Configuration saved!');
        }
      }, 1000);
    });
  };

  const handleClickSave = () => {
    toast.promise(handleCookieSave(), {
      loading: 'Saving...',
      success: <b>Configuration saved!</b>,
      error: <b>Could not save.</b>,
    });
  };

  return (
    <LinkContent>
      <LinkContentCopy>
        <Link>
          <LinkFront onClick={handleClick} className="front">
            Copy Link.
          </LinkFront>
        </Link>
      </LinkContentCopy>
      <LinkContentSave>
        <Link>
          <LinkFront onClick={handleClickSave} className="front">
            Save config.
          </LinkFront>
        </Link>
      </LinkContentSave>
    </LinkContent>
  );
}
