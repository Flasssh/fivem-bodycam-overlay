import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useGlobalState } from '../../../context';

const TimeText = styled.span`
  margin: 0;
  padding: 0;
  min-width: 15px;
`;

interface Props {
  twelveHoursSys: boolean;
}

export function Time({ twelveHoursSys }: Props) {
  const [now, setDate] = useState(new Date());
  const [state] = useGlobalState();

  let monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 12h/24h
  let aMpM;

  // Date
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  // Time
  let hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

  // TimeZone
  let timezone = new Date().getTimezoneOffset() / -60;

  if (twelveHoursSys) {
    aMpM = hours >= 12 ? 'PM' : 'AM';
    hours = now.getHours() % 12;
    hours = hours ? hours : 12;
    if (hours < 10) {
      hours = `0${hours}`;
    }
  }

  return (
    <div>
      <TimeText>{date} </TimeText>
      <TimeText>{monthNames[month]} </TimeText>
      <TimeText>{year} </TimeText>
      <TimeText>{hours}:</TimeText>
      <TimeText>{minutes}:</TimeText>
      <TimeText>{seconds} </TimeText>
      {twelveHoursSys && <TimeText>{aMpM} </TimeText>}
      {state?.showTimeZone && <TimeText>GMT+{timezone}</TimeText>}
    </div>
  );
}
