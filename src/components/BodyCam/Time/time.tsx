import React, { useEffect, useState } from 'react';

import { useGlobalState } from '../../../context';

interface Props {
  twelveHoursSys: boolean;
}

export function Time({ twelveHoursSys }: Props) {
  // TODO: Faire ne sorte que le texte de l'heure soit plus lisible
  // TODO: Faire en sorte que quand le temp < 10 affiche un 0 avant pour l'affichage 12h

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

  let currentTime;
  if (twelveHoursSys) {
    let aMpM = hours >= 12 ? 'PM' : 'AM';
    hours = now.getHours() % 12;
    hours = hours ? hours : 12;
    if (hours < 10) {
      hours = `0${hours}`;
    }

    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds} ${aMpM}`;
  } else {
    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds}`;
  }

  if (state?.showTimeZone) {
    currentTime += ` GMT+${timezone}`;
  }

  return <div>{currentTime}</div>;
}
