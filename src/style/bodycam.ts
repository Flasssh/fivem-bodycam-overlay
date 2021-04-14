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
    width: 20px;
    height: 20px;
    animation: ${pulseRec} 2s infinite ease-in-out;
    margin: 14px 3px 0 3px;
`;

// BodyCamBack

const BodyCamBack = styled.div`
    background: rgba(0,0,0,0.9);
    border-radius: 4px;
    padding: 5px;
    color: white;
    font-family: 'Arial';
    font-weight: bold;
    width: 350px;
`;

// StatucBodyCam 
const StatuBodyCam = styled.div`
    display: flex;
`;

// BodyCamText
const BodyCamText = styled.div`

`;

export { RecDot, BodyCamBack, StatuBodyCam};