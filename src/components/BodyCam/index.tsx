import React, { ReactChild, ReactChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BodyCamBack, RecDot, StatuBodyCam} from '../../style/bodycam';

interface Props {
    children: ReactChild | ReactChildren;
    recStatus: boolean;
    brandName: string;
    agentName: string;
    agentMatricule:boolean;
    agentGrade: string | number;
    policeDepartement: string;
    fullDaySys: boolean;
    weeksDay: boolean;
}

export function BodyCam({recStatus, fullDaySys, weeksDay, brandName, agentName, agentMatricule, agentGrade, policeDepartement}: Props) {
    const locale = 'en';
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    if (weeksDay) {
        const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}`;
    }
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    const year = today.getFullYear();

    return (
      <div>
            <BodyCamBack>
                <StatuBodyCam>
                    <p>REC</p>
                    <RecDot isEnable={recStatus} />
                    <p>{brandName} BODY CAM</p>
                </StatuBodyCam>
                <p>{agentGrade} [{agentMatricule}] {agentName}</p>
                <p>{agentName}</p>
                <p>{date} {year} {time}</p>
            </BodyCamBack>
      </div>
  );
}
