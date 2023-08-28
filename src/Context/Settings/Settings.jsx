import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function Setting (props){
    const [show, setShow] = useState (3);
    const [hide, setHide] = useState (false);


    const state = {
        show: show,
        hide: hide,
        
    }

    return (
        <>
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
        </>
    )
}
