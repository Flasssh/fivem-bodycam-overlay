import React, { useEffect, useState } from 'react';

interface Props {
  twelveHoursSys: boolean;
}

export function Time({ twelveHoursSys }: Props) {
  const [now, setDate] = useState(new Date());

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

  let currentTime;
  if (twelveHoursSys) {
    let aMpM = hours >= 12 ? 'PM' : 'AM';
    hours = now.getHours() % 12;
    hours = hours ? hours : 12;
    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds} ${aMpM}`;
  } else {
    currentTime = `${date} ${monthNames[month]} ${year} ${hours}:${minutes}:${seconds}`;
  }
  return <div>{currentTime}</div>;
}
