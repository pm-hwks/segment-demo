import React from 'react';

export const SFPageTrigger = () => {

    const callPageApi = () => {
        window.analytics.page("Sample Page Event - SFPageTrigger"); 
    };


    return (
        <div>
            <button onClick={callPageApi} className="btn" >Trigger page api</button>
        </div>
    )
}

export default SFPageTrigger
