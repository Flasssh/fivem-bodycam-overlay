import React, { useEffect, useState } from 'react';
import { BodyCamBack, RecDot, StatuBodyCam, BodyText} from '../../style/bodycam';

interface Props {
    // Boolean
    recStatus: boolean;
    weeksDay: boolean;
    hourTwelve: boolean;
    // String
    brandName: string;
    agentName: string;
    policeDepartement: string;
    agentGrade: string | number;
    // Number
    agentMatricule: number;
    opacity: number;
    width: number;
}

export function BodyCam({recStatus, hourTwelve, width, opacity, weeksDay, brandName, agentName, agentMatricule, agentGrade, policeDepartement}: Props) {
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
    const date = `${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}`;
    if (weeksDay) {
        const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}`;
    }
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: hourTwelve, minute: 'numeric' });
    const year = today.getFullYear();

    return (
      <div>
            <BodyCamBack width={width} opacity={opacity}>
                <StatuBodyCam>
                    <BodyText>REC</BodyText>
                    <RecDot isEnable={recStatus} />
                    <BodyText>{brandName} BODY CAM</BodyText>
                </StatuBodyCam>
                <BodyText>{agentGrade} [{agentMatricule}] {agentName}</BodyText>
                <BodyText>{agentName}</BodyText>
                <BodyText>{date} {year} {time}</BodyText>
            </BodyCamBack>
      </div>
  );
}
