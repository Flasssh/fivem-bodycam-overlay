import React, { ReactChild, ReactChildren } from 'react';

interface Props {
    children: ReactChild | ReactChildren;
}

export function BodyCamCreator({children}:Props) {
    
// Ici crée l'endroit ou on pourra modifier/crée la vue BodyCam
// C'est seulement le condainer et non les selects ect...
    
    return (
        <div>
            {children}
        </div>
    )
}