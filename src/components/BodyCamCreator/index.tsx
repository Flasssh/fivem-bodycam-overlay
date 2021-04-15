import React, { ReactChild, ReactChildren } from 'react';

interface Props {
    children: ReactChild | ReactChildren;
}

export function BodyCamCreator({children}:Props) {
    
    return (
        <div>
            {children}
        </div>
    )
}