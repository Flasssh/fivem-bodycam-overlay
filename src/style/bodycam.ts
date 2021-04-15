import styled, { keyframes } from 'styled-components'

type DotProps = {
    isEnable: boolean;
}

// Pulse Rec
const pulseRec = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const RecDot = styled.div<DotProps>`
    background: ${({isEnable}) => ( isEnable ? "rgb(192, 0, 0)" : "black")};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: ${pulseRec} 2s infinite ease-in-out;
    margin: 2px 4px 0 4px;
`;

// BodyCamBack
type BodyBackProps = {
    opacity: number;
    width: number;
}

const BodyCamBack = styled.div<BodyBackProps>`
    background: rgba(0,0,0,${({opacity}) => opacity});
    border-radius: 4px;
    padding: 5px;
    color: white;
    font-family: 'Arial';
    font-size: 12px;
    font-weight: bold;
    width: ${({ width }) => width}px;
    max-width: 300px
`;

// StatucBodyCam 
const StatuBodyCam = styled.div`
    display: flex;
`;

// BodyText
const BodyText = styled.p`
    line-height: 16px;
    margin: 0
`;

export { RecDot, BodyCamBack, StatuBodyCam, BodyText };